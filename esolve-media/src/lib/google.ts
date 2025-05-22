import { google } from "googleapis";
// import path from "path"; // REMOVE: No longer needed
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export async function getSheetsClient() {
  // Ensure environment variables are loaded
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error(
      "Missing Google Sheets API credentials. Ensure GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY are set in your environment variables."
    );
  }

  const auth = new google.auth.GoogleAuth({
    // Use environment variables instead of keyFile
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      // Replace escaped newlines for the private key
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: SCOPES,
  });

  const authClient = (await auth.getClient()) as JWT;

  const sheets = google.sheets({
    version: "v4",
    auth: authClient,
  });

  return sheets;
}
