'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  userId: string | any;
  serviceId: string | any;
  templateId: string | any;
}

export const ContactForm = ({
  userId,
  serviceId,
  templateId,
}: ContactFormProps) => {
  const t = useTranslations('contact_page');

  const formInitialDetails = {
    subject: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [submitButtonText, setSubmitButtonText] = useState(t('send'));

  const onFormUpdate = (field: string, value: string) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitButtonText(t('sending'));

    emailjs
      .send(`${serviceId}`, `${templateId}`, formDetails, `${userId}`)
      .then(
        (result) => {
          console.log(result.text);
          alert('Email successfully sent!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
        },
      );

    setFormDetails(formInitialDetails);

    setSubmitButtonText('Send');
  };

  const handleCancel = () => {
    setFormDetails(formInitialDetails);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-1 flex-col items-end gap-5 rounded-xl bg-primary-bg-color p-6 dark:bg-dark-secondary-bg-color"
    >
      <input
        required
        className="w-full border-b bg-transparent px-4 py-3 caret-icon-color outline-none duration-500 hover:rounded-lg hover:bg-skill-bg-color hover:shadow-box-shadow focus:bg-skill-bg-color dark:border-dark-primary-font-color/50 dark:hover:bg-[#383838] dark:focus:bg-[#383838]"
        type="text"
        name="fullName"
        value={formDetails.fullName}
        placeholder={t('full_name')}
        onChange={(e) => onFormUpdate('fullName', e.target.value)}
      />
      <input
        required
        className="w-full border-b bg-transparent px-4 py-3 caret-icon-color outline-none duration-500 hover:rounded-lg hover:bg-skill-bg-color hover:shadow-box-shadow focus:bg-skill-bg-color dark:border-dark-primary-font-color/50 dark:hover:bg-[#383838] dark:focus:bg-[#383838]"
        type="email"
        name="email"
        value={formDetails.email}
        placeholder={t('email')}
        onChange={(e) => onFormUpdate('email', e.target.value)}
      />
      <input
        className="w-full border-b bg-transparent px-4 py-3 caret-icon-color outline-none duration-500 hover:rounded-lg hover:bg-skill-bg-color hover:shadow-box-shadow focus:bg-skill-bg-color dark:border-dark-primary-font-color/50 dark:hover:bg-[#383838] dark:focus:bg-[#383838]"
        type="tel"
        name="phone"
        value={formDetails.phone}
        placeholder={t('phone')}
        onChange={(e) => onFormUpdate('phone', e.target.value)}
      />
      <input
        required
        className="w-full border-b bg-transparent px-4 py-3 caret-icon-color outline-none duration-500 hover:rounded-lg hover:bg-skill-bg-color hover:shadow-box-shadow focus:bg-skill-bg-color dark:border-dark-primary-font-color/50 dark:hover:bg-[#383838] dark:focus:bg-[#383838]"
        type="text"
        name="subject"
        value={formDetails.subject}
        placeholder={t('subject')}
        onChange={(e) => onFormUpdate('subject', e.target.value)}
      />
      <textarea
        required
        rows={6}
        className="w-full resize-none rounded-lg border bg-transparent px-4 py-3 caret-icon-color shadow-box-shadow outline-none duration-500 hover:bg-skill-bg-color hover:shadow-box-shadow focus:bg-skill-bg-color dark:border-dark-primary-font-color/50 dark:hover:bg-[#383838] dark:focus:bg-[#383838]"
        name="message"
        value={formDetails.message}
        placeholder={t('message')}
        onChange={(e) => onFormUpdate('message', e.target.value)}
      />
      <div className="flex gap-4">
        <button
          onClick={handleCancel}
          className="mt-4 w-[100px] rounded-xl border border-icon-color bg-bt-bg-gradient px-4 py-2 duration-300 hover:scale-105"
          type="reset"
        >
          {t('cancel')}
        </button>
        <button
          className="mt-4 w-[100px] rounded-xl border border-icon-color bg-bt-bg-gradient px-4 py-2 duration-300 hover:scale-105"
          type="submit"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
};
