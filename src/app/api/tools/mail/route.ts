// import connectDB from "@/lib/db";
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import fs from "fs";
// const htmlTemplate = fs.readFileSync('index.html', 'utf8');

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, subject, message } = body;

//     // Validate required fields
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     console.log("Contact Form Submission:", {
//       name,
//       email,
//       subject,
//       message,
//       timestamp: new Date().toISOString(),
//     });

//     // You can integrate with services like:
//     // - Nodemailer (SMTP)
//     // - SendGrid
//     // - AWS SES
//     // - Resend
//     // - Postmark
//     // etc.

//     // Example with Resend (recommended):
//     /*
//     const { Resend } = require('resend');
//     const resend = new Resend(process.env.RESEND_API_KEY);

//     await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>',
//       to: 'contact@vinaytz.com',
//       subject: `New Contact Form: ${subject}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });
//     */

//     connectDB()
    
//     // Example with Nodemailer (SMTP):
//     const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass:  process.env.P     // use App Password
//     },
//     });

    
//     const mailOptions = {
//     from: 'xvinaytiwari@gmail.com',
//     // to: 'info@denthinkers.in', // Change to 'info@denthinkers.in' when ready
//     subject: `Denthinkers Proposal: Transforming D.V. Singh Foundation's Digital Presence`,
//     html: htmlTemplate,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//     if (err) return console.error('Error:', err);
//     console.log('✅ Email sent successfully:', info.response);
//     });
            



//     return NextResponse.json(
//       { message: "Message sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Contact form error:", error);
//     return NextResponse.json(
//       { error: "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }
