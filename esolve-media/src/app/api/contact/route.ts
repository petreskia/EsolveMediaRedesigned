// app/api/contact/route.ts
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

// Define the shape of the data coming from the contact form
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  budget: string;
  services?: string[]; // Array of service IDs
  packageType?: string; // e.g., "personal-branding"
  packageId?: string; // e.g., "startup-growth-package"
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData = await req.json();
    const now = new Date().toLocaleString();

    // Prepare data for Google Sheet row
    // Each item in this array corresponds to a column in your 'ContactForm' sheet
    const values = [
      [
        now, // Timestamp (Column A)
        data.name || "", // Name (Column B)
        data.email || "", // Email (Column C)
        data.budget || "", // Budget Range (Column D)
        data.phone || "", // Phone (Column E)
        data.company || "", // Company (Column F)
        data.message || "", // Additional Message (Column G)
        // Format selected services and packages into strings for single cells
        (data.services || [])
          .map((serviceId) => {
            // Optional: You could fetch the full service title here if needed
            // For now, we'll just use the ID as it's what's in `data.services`
            return serviceId;
          })
          .join(", "), // Selected Services (Column H)
        data.packageType && data.packageId // Selected Package (Column I)
          ? `${data.packageType} - ${data.packageId}`
          : "None Selected",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "ContactForm!A:I", // **IMPORTANT**: This range must match your actual sheet columns
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (err) {
    console.error("Contact Form API Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
