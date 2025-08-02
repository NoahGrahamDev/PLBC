import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, phone, message }: ContactEmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #2563eb', paddingBottom: '10px' }}>
        New Contact Form Submission
      </h2>
      <div style={{ margin: '20px 0' }}>
        <p style={{ margin: '10px 0' }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Phone:</strong> {phone}
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Message:</strong>
        </p>
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
          {message}
        </div>
      </div>
    </div>
  );
}
