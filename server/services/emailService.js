const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (email, fullName) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Rachel0583202634@gmail.com', 
            pass: 'rachel214901134',
        },
    });

    const mailOptions = {
        from: 'Rachel0583202634@gmail.com',  
        to: email,                   
        subject: 'Welcome to Our Platform!',
        html: `
        <html>
        <head>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f0f0f0;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    text-align: center;
                }
                h1 {
                    color: #3498db;
                    font-size: 36px;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 18px;
                    color: #555;
                    line-height: 1.6;
                }
                .button {
                    display: inline-block;
                    background-color: #3498db;
                    color: #fff;
                    padding: 12px 30px;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 18px;
                    margin-top: 20px;
                }
                .footer {
                    font-size: 12px;
                    color: #777;
                    margin-top: 30px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome, ${fullName}!</h1>
                <p>We're excited to have you on board. Thank you for joining our platform. We're here to help you grow and succeed.</p>
                <a href="https://your-platform.com" class="button">Get Started</a>
                <p class="footer">If you didn’t sign up, please ignore this email.</p>
            </div>
        </body>
        </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent successfully!');
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

module.exports = { sendWelcomeEmail };