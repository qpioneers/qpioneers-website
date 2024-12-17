// @ts-ignore
import {defineEventHandler, readBody} from 'h3';
// @ts-ignore
import nodemailer from 'nodemailer';

//@ts-ignore
export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Validate form data
    const {name, lastName, email, message} = body;
    if (!name || !email || !lastName) {
        return {status: 400, message: 'All fields are required.'};
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // Replace with your SMTP server
        port: Number(process.env.SMTP_PORT),               // Typically 587 for TLS or 465 for SSL
        secure: false,           // Set true if using SSL
        auth: {
            user: process.env.SMTP_USER, // Your SMTP username
            pass: process.env.SMTP_PASS,   // Your SMTP password
        },
    });

    // Send the email
    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Sender info
            to: process.env.MAIL_RECIPIENT,// Recipient email
            subject: 'Contact Form Submission',
            text: message,                 // Plain text body
            html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="text-align: center; color: #44af49;">New contact form submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
      ${message}
    </div>
    <footer style="margin-top: 20px; text-align: center; font-size: 12px; color: #888;">
      This email was sent from your website's (qpioneers) contact form.
    </footer>
  </div>
`    // HTML body
        });

        return {status: 200, message: 'Email sent successfully.'};
    } catch (error) {
        console.error('Error sending email:', error);
        return {status: 500, message: 'Failed to send email.'};
    }
});
