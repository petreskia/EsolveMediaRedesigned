// app/api/portfolio-request/route.ts
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { JWT } from "google-auth-library";

// Ensure your environment variables are correctly set in Netlify
const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

// Define the shape of the data coming from the portfolio request form
interface PortfolioRequestData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message?: string;
  agreeToTerms: boolean; // Although not strictly needed for the sheet, it's part of the form data
}

export async function POST(req: NextRequest) {
  try {
    const data: PortfolioRequestData = await req.json();
    const now = new Date().toLocaleString();

    // Prepare data for Google Sheet row
    // Each item in this array corresponds to a column in your 'PortfolioRequests' sheet
    const values = [
      [
        now, // Timestamp (Column A)
        data.name || "", // Name (Column B)
        data.email || "", // Email (Column C)
        data.company || "", // Company (Column D)
        data.projectType || "", // Project Type (Column E)
        data.message || "", // Additional Message (Column F)
        data.agreeToTerms ? "Yes" : "No", // Agreed to Terms (Column G)
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "PortfolioRequests!A:G", // **IMPORTANT**: This range must match your actual sheet columns
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({
      success: true,
      message: "Portfolio request submitted successfully",
    });
  } catch (err) {
    console.error("Portfolio Request API Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
