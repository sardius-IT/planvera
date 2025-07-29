import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method allowed" });
  }

  const {
    name,
    email,
    mobile,
    country,
    intake,
    course,
    qualification,
    graduationYear,
    cgpa,
    workExperience,
    workYears,
    scores,
    testTypes,
    city,
    referral,
    enquiryType,
    message,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <h2>MS Abroad Enquiry Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Country of Interest:</strong> ${country}</p>
      <p><strong>Intake:</strong> ${intake}</p>
      <p><strong>Preferred Course:</strong> ${course}</p>
      <p><strong>Highest Qualification:</strong> ${qualification}</p>
      <p><strong>Year of Graduation:</strong> ${graduationYear}</p>
      <p><strong>CGPA / Percentage:</strong> ${cgpa}</p>
      <p><strong>Work Experience:</strong> ${workExperience}</p>
      ${
        workExperience === "Yes"
          ? `<p><strong>Years of Experience:</strong> ${workYears}</p>`
          : ""
      }
      <p><strong>Test Scores:</strong> ${scores}</p>
      <p><strong>Test Types:</strong> ${testTypes}</p>
      <p><strong>City / State:</strong> ${city}</p>
      <p><strong>How did you hear about us:</strong> ${referral}</p>
      <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    await transporter.sendMail({
      from: `"MS Abroad Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New MS Abroad Enquiry",
      html: htmlContent,
    });

    return res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
