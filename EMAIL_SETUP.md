# Email Setup Guide

## Option 1: EmailJS (Recommended - Free)

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{project_type}}` - Project type
   - `{{message}}` - Message content
   - `{{to_email}}` - Your sister's email (mehakverma3901@gmail.com)

5. Get your Service ID, Template ID, and Public Key
6. Update the contact form with these values

## Option 2: Formspree (Easiest - Free)

1. Go to https://formspree.io/
2. Sign up for free
3. Create a new form
4. Get your form endpoint URL
5. Update the form action to use Formspree

## Option 3: Netlify Forms (If deploying to Netlify)

1. Add `netlify` attribute to form
2. Add hidden input for Netlify
3. Forms will be sent to Netlify dashboard

## Current Status
The form is currently set up for EmailJS but needs configuration.

