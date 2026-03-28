import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, phone, type, message } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !phone || !type || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Tafadhali jaza taarifa zote zinazohitajika.' }),
      };
    }

    // Get email credentials from environment variables
    const emailUser = process.env.NETLIFY_EMAIL_USER;
    const emailPass = process.env.NETLIFY_EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Email credentials are not configured in environment variables.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Hitilafu ya mfumo: Mawasiliano hayajasanidiwa vyema.' }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email to CAHERA
    const mailOptions = {
      from: emailUser,
      to: 'caherainvestments@gmail.com',
      subject: `Ombi Jipya: ${type} - ${name}`,
      text: `
        Jina: ${name}
        Simu: ${phone}
        Aina ya Mteja: ${type}
        Ujumbe: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #064e3b;">
          <h2 style="color: #059669;">Ombi Jipya la Mawasiliano</h2>
          <p><strong>Jina:</strong> ${name}</p>
          <p><strong>Simu:</strong> ${phone}</p>
          <p><strong>Aina ya Mteja:</strong> ${type}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f0fdf4; border-radius: 8px;">
            <p><strong>Ujumbe:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Ombi lako limetumwa kwa mafanikio.' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Imeshindwa kutuma ombi. Tafadhali jaribu tena baadae.' }),
    };
  }
};
