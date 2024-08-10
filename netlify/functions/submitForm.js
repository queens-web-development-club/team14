const nodemailer = require('nodemailer');

/* When the form is submitted, Netlify looks to call this handler function. */
exports.handler = async function(event, context) {
    if (process.env.DEV === 'true') {
        console.log("IN EMAIL SERVICE FUNCTION");
        try {
            console.log(`{event.body} = ${event.body}`);
        } catch (e) {
            console.log(e);
        }
    }

    // Parse form data
    const queryString = new URLSearchParams(event.body);
    const name = queryString.get('name');
    const email = queryString.get('email');
    const message = queryString.get('message');

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,  // uses STARTTLS
        secure: false,  // true for 465, false for other ports (e.g., 587)
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: `New message from ${name}`,
        text: `${message} \r\n I can be reached at ${email}`
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