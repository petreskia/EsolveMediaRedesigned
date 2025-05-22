// app/api/discovery-call/route.ts
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { JWT } from "google-auth-library";

const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

interface DiscoveryCallData {
  name?: string;
  email?: string;
  selectedServices: string[];
}
export async function POST(req: NextRequest) {
  try {
    const data: DiscoveryCallData = await req.json();
    const now = new Date().toLocaleString();

    const values = [
      [
        now,
        data.name || "",
        data.email || "",
        data.selectedServices.join(", ") || "",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "PopUpServices!A:D", // Adjust this to match your Sheet1 columns
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({
      success: true,
      message: "Discovery call data saved successfully",
    });
  } catch (err) {
    console.error("Discovery Call API Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
