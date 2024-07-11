'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com'

export const ContactForm = () => {
  const formInitialDetails = {
    subject: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };


  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [submitButtonText, setSubmitButtonText] = useState('Send');

  const onFormUpdate = (field: string, value: string) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitButtonText('Sending...');

    emailjs
      .send(
        'service_fz97a4y', // Replace with your Service ID
        'template_mal4tcf', // Replace with your Template ID
        formDetails,
        '6bZoIKzWcrfEh8Cw8' // Replace with your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email successfully sent!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
        }
      );

      setFormDetails(formInitialDetails);

    setSubmitButtonText('Send')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex-1 rounded-xl bg-primary-bg-color p-4 dark:bg-dark-secondary-bg-color">
      <input
        type="text"
        name="subject"
        value={formDetails.subject}
        placeholder="Subject"
        onChange={(e) => onFormUpdate('subject', e.target.value)}
      />
      <input
        type="text"
        name="fullName"
        value={formDetails.fullName}
        placeholder="Full name"
        onChange={(e) => onFormUpdate('fullName', e.target.value)}
      />
      <input
        type="email"
        name='email'
        value={formDetails.email}
        placeholder="Email address"
        onChange={(e) => onFormUpdate('email', e.target.value)}
      />
      <input
        type="tel"
        name='phone'
        value={formDetails.phone}
        placeholder="Phone number"
        onChange={(e) => onFormUpdate('phone', e.target.value)}
      />
      <textarea
        name='message'
        value={formDetails.message}
        placeholder="Your message"
        onChange={(e) => onFormUpdate('message', e.target.value)}
      />
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};
