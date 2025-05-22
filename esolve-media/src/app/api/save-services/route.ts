// app/api/save-services/route.ts

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

// 📄 Helper: Append custom packages to Sheet2
interface CustomPackage {
  id?: string; // Add id if you use it for keying
  title?: string;
  quantity?: string | number;
  selectedChannels?: string[];
  subtitle?: string;
  features?: string[];
}

// **MODIFIED:** Now accepts name, email, phone, and message
async function appendCustomPackage(
  name: string,
  email: string,
  phone: string,
  message: string,
  selectedPackages: CustomPackage[],
  timestamp: string
) {
  // We'll create one row per submission, summarizing packages
  // You might need to adjust the structure based on your Sheet2 columns
  const formattedPackages = selectedPackages
    .map((pkg) => {
      let details = pkg.title || "Untitled Package";
      if (pkg.quantity) details += ` (Qty: ${pkg.quantity})`;
      if (pkg.selectedChannels && pkg.selectedChannels.length > 0) {
        details += ` [${pkg.selectedChannels.join(", ")}]`;
      }
      // You can add more package details here if needed, like subtitle/features
      // if (pkg.subtitle) details += ` - ${pkg.subtitle}`;
      // if (pkg.features && pkg.features.length > 0) details += ` (${pkg.features.join('; ')})`;
      return details;
    })
    .join(" | "); // Join multiple packages with a separator

  const values = [
    [
      timestamp,
      name,
      email,
      phone,
      message,
      formattedPackages, // All selected packages summarized into one cell
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "CustomPackages!A:A", // **IMPORTANT**: Adjust this range if you add more columns in Sheet2
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

// 📄 Helper: Append Discovery Call data to Sheet1
interface DiscoveryCallData {
  name?: string;
  email?: string;
  selectedServices: string[];
}
async function appendDiscoveryCallData(
  data: DiscoveryCallData,
  timestamp: string
) {
  const values = [
    [
      timestamp,
      data.name || "",
      data.email || "",
      data.selectedServices.join(", ") || "", // Join services into a string
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "PopUpServices!A:D", // Adjust the range to match your Sheet1 columns
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

// 📄 Helper: Append standard form data to Sheet1 (if still used)
interface DefaultFormData {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

async function appendDefaultForm(data: DefaultFormData, timestamp: string) {
  const values = [
    [
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.message || "",
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "PopUpServices!A:E", // Adjust if needed
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

// Now your POST function can see these helpers
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const now = new Date().toLocaleString();

    if (data.type === "customPackage") {
      // **MODIFIED:** Pass name, email, phone, and message
      await appendCustomPackage(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.selectedPackages,
        now
      );
      return NextResponse.json({ success: true, message: "Saved to Sheet2" });
    } else if (data.source === "discoveryCall") {
      await appendDiscoveryCallData(data, now);
      return NextResponse.json({
        success: true,
        message: "Saved discovery call data to sheet1",
      });
    }

    // This block would only be hit if neither 'type' nor 'source' matches
    await appendDefaultForm(data, now);
    return NextResponse.json({ success: true, message: "Saved to Sheet1" });
  } catch (err) {
    console.error("API ERROR:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
