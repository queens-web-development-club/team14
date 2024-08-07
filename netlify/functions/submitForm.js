const nodemailer = require('nodemailer');

/* When the form is submitted, Netlify looks to call this handler function. */
exports.handler = async function(event, context) {
    console.log("IN EMAIL SERVICE FUNCTION");
    try {
        console.log(event);
        console.log(event.body);
    } catch (e) {
        console.log(e);
    }
    const { name, email, message } = JSON.parse(event.body);    // Parse form data
    
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Define the email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `New message from ${name}`,
        text: message
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,    // OK
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (err) {
        return {
            statusCode: 500,    // Internal Server Error
            body: JSON.stringify({ error: 'Failed to send email', details: err.message })
        };
    }
};