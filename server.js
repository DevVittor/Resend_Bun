import { Resend } from 'resend';

const resend = new Resend('re_9SJBrgYB_68vpjMDU15Yq1jrNsdX23KvE');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'vittorserradev@gmail.com',
  subject: 'Hello World',
  html: '<p style="font-size:44px;">Congrats on sending your <strong>first email</strong>!</p>'
});