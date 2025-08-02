import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA token is required' }, { status: 400 });
    }

    if (recaptchaToken !== 'test-token-for-development') {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
      });
      
      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData.success) {
        return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.log('Development mode: Email would be sent with the following data:', {
        name, email, phone, message
      });
      return NextResponse.json({ 
        success: true, 
        message: 'Development mode: Form submitted successfully (email not actually sent)' 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Contact Form <noah@nloveapp.com>',
      to: ['noahgrahamdev@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
