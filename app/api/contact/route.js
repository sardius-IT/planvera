import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
         user: "planveraconsultancy@gmail.com",
        pass: "ytqjvpynvedndtdr",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 📩 Email to you (consultancy)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "planveraconsultancy@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr><td><strong>Full Name</strong></td><td>${data.fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Mobile</strong></td><td>${data.mobile}</td></tr>
          <tr><td><strong>Comments</strong></td><td>${data.comments || "N/A"}</td></tr>
        </table>
      `,
    };

    // 📩 Auto-reply to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: data.email, // reply goes to the user
      subject: "Thank you for contacting Planvera Consultancy ",
      html: `
        <p>Dear ${data.fullName || "Applicant"},</p>
        <p>Thank you for reaching out to <strong>Planvera Consultancy </strong>. 
        We have received your message and will get back to you shortly.</p>
        
        <p><strong>Your submitted details:</strong></p>
        <ul>
          <li><b>Name:</b> ${data.fullName}</li>
          <li><b>Email:</b> ${data.email}</li>
          <li><b>Mobile:</b> ${data.mobile}</li>
          <li><b>Comments:</b> ${data.comments || "N/A"}</li>
        </ul>
        
        <br/>
        <p style="font-size:14px;color:#555;">Best Regards,<br/> Planvera Consultancy  Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}