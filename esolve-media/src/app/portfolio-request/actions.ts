"use server";

import nodemailer from "nodemailer";

interface PortfolioRequestData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message?: string;
}

export async function sendPortfolioRequest(data: PortfolioRequestData) {
  try {
    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      secure: process.env.EMAIL_SERVER_SECURE === "true",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Create email HTML content
    const htmlContent = `
      <h2>New Portfolio Access Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
      <p><strong>Project Type:</strong> ${data.projectType}</p>
      
      <h3>Additional Message:</h3>
      <p>${data.message || "No additional message provided"}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "your-email@example.com",
      to: process.env.EMAIL_TO || "contact@esolvemedia.com",
      subject: `Portfolio Access Request: ${data.name} - ${
        data.company || "No Company"
      }`,
      html: htmlContent,
      // Add reply-to header so you can reply directly to the requester
      replyTo: data.email,
    });

    // For demonstration, we'll add a small delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Error sending portfolio request:", error);
    throw new Error("Failed to send portfolio request");
  }
}
