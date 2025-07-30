import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user:"planveraconsultancy@gmail.com",
        pass:"ytrylijksqaglzzc",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to:"planveraconsultancy@gmail.com",
      subject: "New master Counseling Submission",
      html: `
        <h2>Master Counseling Form Submission</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr><td><strong>Full Name</strong></td><td>${data.fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Mobile</strong></td><td>${data.mobile}</td></tr>
          <tr><td><strong>Course</strong></td><td>${data.course}</td></tr>
          <tr><td><strong>Branch</strong></td><td>${data.branch}</td></tr>
          <tr><td><strong>Comments</strong></td><td>${data.comments}</td></tr>
          <tr><td><strong>Countries of Interest</strong></td><td>${data.countries.join(", ")}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
