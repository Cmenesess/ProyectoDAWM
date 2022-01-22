const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'Hotmail',
 auth: {
 user: 'karlitamenemu@hotmail.com', // Cambialo por tu email
 pass: '' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: 'karlitamenemu@hotmail.com',
 to: 'karlitamenemu@hotmail.com', // Cambia esta parte por el destinatario
 subject: formulario.asunto,
 html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}