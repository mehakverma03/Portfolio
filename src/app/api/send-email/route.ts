import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, projectType, message } = await request.json()

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mehakverma3901@gmail.com', // Your sister's email (sender)
        pass: 'iwqx tnyv xzbz xdyh' // Your actual App Password
      },
    })

    // Email content
    const mailOptions = {
      from: 'mehakverma3901@gmail.com',
      to: 'mehakverma3901@gmail.com', // Your sister's email (recipient)
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Portfolio Contact!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">👤 Name:</strong> ${firstName} ${lastName}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📧 Email:</strong> ${email}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">📝 Subject:</strong> ${subject || 'No subject provided'}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">🎯 Project Type:</strong> ${projectType || 'Not specified'}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">💬 Message:</strong>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #667eea;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form at <strong>mehakverma3901@gmail.com</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    console.log('✅ Email sent successfully to mehakverma3901@gmail.com')
    console.log('📧 From:', `${firstName} ${lastName} (${email})`)
    console.log('📝 Subject:', subject || 'New Message')

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully to mehakverma3901@gmail.com' 
    })
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }, { status: 500 })
  }
}
