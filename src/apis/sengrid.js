const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: '',
    from: '',
    subject: '',
    text: ''
};
sgMail.send(msg);