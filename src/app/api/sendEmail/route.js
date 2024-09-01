// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export async function POST(req) {
  const formData = await req.json();
  console.log("=== req.body", formData);
  const { email, subject, message } = formData;
  if (!email || !subject || !message) {
    return new Response(`Failed - Fields not filled`, {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.RECEIVER_EMAIL_USER, // Recipient's email address
      subject: subject,
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(`Failed: ${error.message}`, {
      status: 400,
    });
  }
  
}
