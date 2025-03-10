/* eslint-disable prettier/prettier */
import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.node_env === 'production', // true for port 465, false for other ports
    auth: {
      user: config.smtp_email_sender,
      pass: 'mhzr albz fkji fhgx',
    },
  });

  await transporter.sendMail({
    from: config.smtp_email_sender,
    to,
    subject: 'Reset your password within 10 mins!',
    text: '',
    html,
  });
};
