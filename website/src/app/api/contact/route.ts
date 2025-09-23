import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '../../components/ContactEmailTemplate';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ 
        error: 'All fields are required (name, email, phone, message)' 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
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

    console.log('Production mode: Attempting to send email with Resend');
    console.log('API Key present:', !!process.env.RESEND_API_KEY);
    console.log('API Key length:', process.env.RESEND_API_KEY?.length);
    console.log('From address:', 'Contact Form <noah@nloveapp.com>');
    console.log('To address:', 'noahgrahamdev@gmail.com');

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noah@nloveapp.com>',
      to: ['noahgrahamdev@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmailTemplate({ name, email, phone, message }),
    });

    if (error) {
      console.error('Resend error details:', JSON.stringify(error, null, 2));
      console.error('Error type:', typeof error);
      console.error('Error message:', error.message);
      return NextResponse.json({ 
        error: 'Failed to send email', 
        details: error.message || 'Unknown error'
      }, { status: 500 });
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
