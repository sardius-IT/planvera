import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 📩 Email to you (consultancy)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "planveraconsultancy@gmail.com",
      subject: "New Booking Submission",
      html: `
        <h2 style="font-family: Arial, sans-serif;">Booking Details</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Mobile</strong></td><td>${data.mobile}</td></tr>
          <tr><td><strong>Country</strong></td><td>${data.country}</td></tr>
          <tr><td><strong>Intake</strong></td><td>${data.intake}</td></tr>
          <tr><td><strong>Course</strong></td><td>${data.course}</td></tr>
          <tr><td><strong>Qualification</strong></td><td>${data.qualification}</td></tr>
          <tr><td><strong>Graduation Year</strong></td><td>${data.graduationYear}</td></tr>
          <tr><td><strong>CGPA</strong></td><td>${data.cgpa}</td></tr>
          <tr><td><strong>Work Experience</strong></td><td>${data.workExperience}</td></tr>
          <tr><td><strong>Work Years</strong></td><td>${data.workYears}</td></tr>
          <tr><td><strong>Scores</strong></td><td>${data.scores}</td></tr>
          <tr><td><strong>Test Types</strong></td><td>${data.testTypes}</td></tr>
          <tr><td><strong>City</strong></td><td>${data.city}</td></tr>
          <tr><td><strong>Referral</strong></td><td>${data.referral}</td></tr>
        </table>
      `,
    };

    // 📩 Auto-reply to applicant
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: data.email, // send to applicant
      subject: "Thank you for your application – Planvera Consultancy ",
      html: `
        <p>Dear ${data.name},</p>
        <p>Thank you for submitting your application with <strong>Planvera Consultancy</strong>.</p>
        <p>We have received your details and our team will get back to you shortly.</p>
        <br/>
        <p style="font-size:14px;color:#555;">Best Regards,<br/>Planvera Consultancy Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error.message);
    return new Response(
      JSON.stringify({ message: "Failed to send email.", error: error.message }),
      { status: 500 }
    );
  }
}
