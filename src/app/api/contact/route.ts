// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const body = (await req.json()) as {
//       name: string;
//       phone: string;
//       email: string;
//       reason: string;
//       qualification: string;
//       message: string;
//     };
//     const { name, email, phone, reason, qualification, message } = body;

//     const smtpOptions = {
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     };

//     const transporter = nodemailer.createTransport({
//       ...smtpOptions,
//     });

//     const mailOptions = {
//       from: `${process.env.EMAIL_FROM_PREFIX} Contact <${process.env.EMAIL_USER}>`,
//       to: process.env.RECIPIENT_EMAIL,
//       subject: "New Contact Form Submission",
//       text: `
//         New Contact Form Submission:
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Reason: ${reason}
//         Qualification: ${qualification}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: "Form Submitted" }, { status: 200 });
//   } catch (error) {
//     console.error("Form error:", error);
//     return NextResponse.json(
//       { error: "Failed to submit form" },
//       { status: 500 },
//     );
//   }
// }

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper function to format reason for display
const formatReason = (reason: string): string => {
  const reasonMap: { [key: string]: string } = {
    "course-inquiry": "Course Inquiry",
    admission: "Admission Process",
    "career-guidance": "Career Guidance",
    "corporate-training": "Corporate Training",
    other: "Other",
  };
  return reasonMap[reason] || reason;
};

// Helper function to format qualification for display
const formatQualification = (qualification: string): string => {
  const qualificationMap: { [key: string]: string } = {
    "high-school": "High School",
    diploma: "Diploma",
    bachelors: "Bachelor's Degree",
    masters: "Master's Degree",
    professional: "Professional Certificate",
    other: "Other",
  };
  return qualificationMap[qualification] || qualification;
};

// Helper function to get priority level based on reason
const getPriorityLevel = (reason: string): string => {
  const priorityMap: { [key: string]: string } = {
    admission: "HIGH",
    "course-inquiry": "MEDIUM",
    "career-guidance": "MEDIUM",
    "corporate-training": "HIGH",
    other: "NORMAL",
  };
  return priorityMap[reason] || "NORMAL";
};

// Helper function to get suggested follow-up actions
const getFollowUpActions = (reason: string): string[] => {
  const actionMap: { [key: string]: string[] } = {
    "course-inquiry": [
      "Send detailed course brochure",
      "Schedule counseling session",
      "Provide fee structure",
    ],
    admission: [
      "Send admission guidelines",
      "Schedule admission interview",
      "Verify qualification documents",
    ],
    "career-guidance": [
      "Schedule career counseling session",
      "Assess current skill level",
      "Recommend suitable programs",
    ],
    "corporate-training": [
      "Schedule business meeting",
      "Prepare custom training proposal",
      "Discuss bulk pricing options",
    ],
    other: [
      "Review inquiry details",
      "Determine appropriate department",
      "Schedule follow-up call",
    ],
  };
  return actionMap[reason] || ["Follow up within 24 hours"];
};

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const body = (await req.json()) as {
      name: string;
      phone: string;
      email: string;
      reason: string;
      qualification: string;
      message: string;
    };

    const { name, email, phone, reason, qualification, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !reason || !qualification || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration in environment variables");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const smtpOptions = {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport(smtpOptions);

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email service unavailable" },
        { status: 503 },
      );
    }

    // Get formatted data
    const formattedReason = formatReason(reason);
    const formattedQualification = formatQualification(qualification);
    const priority = getPriorityLevel(reason);
    const followUpActions = getFollowUpActions(reason);
    const submissionTime = new Date();
    const submissionId = `FL-${Date.now()}`;

    // Create professional HTML email template
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
      <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0891b2 0%, #22d3ee 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
            🎓 New Contact Submission
          </h1>
          <p style="color: #e0f7fa; margin: 10px 0 0 0; font-size: 16px;">
            Finnext Learnings Contact Form
          </p>
        </div>

        <!-- Priority Banner -->
        <div style="background-color: ${priority === "HIGH" ? "#dc2626" : priority === "MEDIUM" ? "#d97706" : "#059669"}; 
                    color: white; text-align: center; padding: 12px; font-weight: bold; font-size: 14px;">
          🚨 PRIORITY: ${priority} - ${formattedReason}
        </div>

        <!-- Submission Details -->
        <div style="padding: 30px;">
          <div style="background-color: #f1f5f9; border-left: 4px solid #0891b2; padding: 20px; margin-bottom: 25px;">
            <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px;">📋 Submission Details</h2>
            <p style="margin: 5px 0; color: #64748b; font-size: 14px;">
              <strong>Submission ID:</strong> ${submissionId}<br>
              <strong>Date & Time:</strong> ${submissionTime.toLocaleString(
                "en-IN",
                {
                  timeZone: "Asia/Kolkata",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                },
              )} (IST)
            </p>
          </div>

          <!-- Contact Information -->
          <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
              👤 Contact Information
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 150px;">
                  📛 Full Name
                </td>
                <td style="padding: 12px 15px; border: 1px solid #e2e8f0; color: #1f2937; font-size: 16px;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  📧 Email Address
                </td>
                <td style="padding: 12px 15px; border: 1px solid #e2e8f0; color: #1f2937;">
                  <a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  📱 Phone Number
                </td>
                <td style="padding: 12px 15px; border: 1px solid #e2e8f0; color: #1f2937;">
                  <a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  🎯 Contact Reason
                </td>
                <td style="padding: 12px 15px; border: 1px solid #e2e8f0; color: #1f2937;">
                  <span style="background-color: #0891b2; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
                    ${formattedReason}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; font-weight: bold; color: #374151;">
                  🎓 Qualification
                </td>
                <td style="padding: 12px 15px; border: 1px solid #e2e8f0; color: #1f2937;">
                  ${formattedQualification}
                </td>
              </tr>
            </table>
          </div>

          <!-- Message Content -->
          <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
              💬 Message Content
            </h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 4px solid #22d3ee; line-height: 1.6; color: #374151;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <!-- Suggested Follow-up Actions -->
          <div style="background-color: #ecfdf5; border: 2px solid #10b981; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
            <h2 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">
              ✅ Suggested Follow-up Actions
            </h2>
            <ul style="margin: 0; padding-left: 20px; color: #064e3b;">
              ${followUpActions.map((action) => `<li style="margin: 8px 0; line-height: 1.5;">${action}</li>`).join("")}
            </ul>
          </div>

          <!-- Quick Actions -->
          <div style="text-align: center; margin: 30px 0;">
            <h3 style="color: #1e293b; margin-bottom: 20px;">Quick Actions</h3>
            <div style="display: inline-block; margin: 0 10px;">
              <a href="mailto:${email}" style="background-color: #0891b2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; margin: 5px;">
                📧 Reply via Email
              </a>
            </div>
            <div style="display: inline-block; margin: 0 10px;">
              <a href="tel:${phone}" style="background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; margin: 5px;">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #1e293b; color: #94a3b8; text-align: center; padding: 25px;">
          <p style="margin: 0; font-size: 14px;">
            This email was automatically generated from the Finnext Learnings contact form.<br>
            Please respond to this inquiry within 24 hours for optimal customer service.
          </p>
          <div style="margin-top: 15px;">
            <strong style="color: #22d3ee;">Finnext Learnings</strong><br>
            <span style="font-size: 12px;">Practical Training • Professional Growth • Career Success</span>
          </div>
        </div>
      </div>
    </body>
    </html>`;

    // Email options
    const mailOptions = {
      from: `${process.env.EMAIL_FROM_PREFIX || "Finnext Learnings"} <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `🎓 New ${formattedReason} - ${name} [${priority}] - ${submissionId}`,
      html: htmlContent,
      // Also include plain text version
      text: `
New Contact Form Submission - ${submissionId}

PRIORITY: ${priority}
Submission Time: ${submissionTime.toLocaleString()}

CONTACT DETAILS:
Name: ${name}
Email: ${email}
Phone: ${phone}
Reason: ${formattedReason}
Qualification: ${formattedQualification}

MESSAGE:
${message}

SUGGESTED ACTIONS:
${followUpActions.map((action, index) => `${index + 1}. ${action}`).join("\n")}

Please respond within 24 hours.
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", {
      messageId: info.messageId,
      submissionId,
      to: mailOptions.to,
      priority,
      timestamp: submissionTime.toISOString(),
    });

    return NextResponse.json(
      {
        message: "Form submitted successfully",
        submissionId,
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Form submission error:", error);

    // Enhanced error logging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        error: "Failed to submit form",
        details:
          process.env.NODE_ENV === "development"
            ? error
            : "Please try again later",
      },
      { status: 500 },
    );
  }
}
