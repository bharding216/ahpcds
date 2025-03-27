import nodemailer from 'nodemailer';
import { 
    RECAPTCHA_SECRET_KEY, 
    DEVELOPMENT_SMTP_HOST,
    DEVELOPMENT_SMTP_PASS,
    DEVELOPMENT_SMTP_PORT,
    DEVELOPMENT_SMTP_USER,
    PRODUCTION_SMTP_HOST,
    PRODUCTION_SMTP_PORT,
    PRODUCTION_SMTP_USER,
    PRODUCTION_SMTP_PASS
} from '$env/static/private'
import { dev } from '$app/environment';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        // Verify reCAPTCHA
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `secret=${RECAPTCHA_SECRET_KEY}&response=${data.get('g-recaptcha-response')}`
        });

        const recaptcha = await response.json();

        if (!recaptcha.success) {
            return {
                status: 400,
                body: {
                    error: 'reCAPTCHA failed'
                },
                success: false
            }
        }

        // Dynamically configure transport based on environment
        const transportConfig = dev ? {
            host: DEVELOPMENT_SMTP_HOST,
            port: DEVELOPMENT_SMTP_PORT,
            auth: {
                user: DEVELOPMENT_SMTP_USER,
                pass: DEVELOPMENT_SMTP_PASS
            }
        } : {
            host: PRODUCTION_SMTP_HOST,
            port: PRODUCTION_SMTP_PORT,
            auth: {
                user: PRODUCTION_SMTP_USER,
                pass: PRODUCTION_SMTP_PASS
            },
        };

        const transport = nodemailer.createTransport(transportConfig);

        const recipientEmail = dev
            ? 'brandon@toddly.app'
            : 'ahpcdayschool@gmail.com';

        try {
            await transport.sendMail({
                from: 'hello@ahpcdayschool.com',
                to: recipientEmail,
                cc: dev ? '' : 'brandon@toddly.app',
                subject: `${dev ? '[DEV] ' : ''}New Contact Form Submission`,
                html: `
                    <h1>Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${escapeHtml(safeGet(data, 'username'))}</p>
                    <p><strong>Email:</strong> ${escapeHtml(safeGet(data, 'email'))}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(safeGet(data, 'phone'))}</p>
                    <p><strong>DOB:</strong> ${escapeHtml(safeGet(data, 'dob'))}</p>
                    <p><strong>Message:</strong> ${escapeHtml(safeGet(data, 'message'))}</p>
                `
            });

            return {
                status: 200,
                body: {
                    success: true
                }
            };

        } catch (error) {
            console.error('Full error details:', error);
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
            
            return {
                status: 500,
                body: {
                    error: `Failed to send email: ${error.message}`,
                    success: false
                }
            };
        }
    }
}

// Utility function to prevent XSS
function escapeHtml(unsafe) {
    return unsafe
        .toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function safeGet(formData, key) {
    const value = formData.get(key);
    
    // If the value is null or an empty string, return a placeholder
    if (value == null || value === '') {
        return key === 'dob' ? 'Not born yet' : '';
    }
    
    return value;
}