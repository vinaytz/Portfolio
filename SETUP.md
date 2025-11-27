# Portfolio Website - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Razorpay API key.

### 3. Get Razorpay API Keys

1. Sign up at [Razorpay](https://razorpay.com)
2. Go to Dashboard → Settings → API Keys
3. Generate Test/Live keys
4. Copy the **Key ID** to your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📧 Email Notification Setup

To receive email notifications when someone makes a payment, you need to set up an API route to send emails.

### Option 1: Using Resend (Recommended)

1. **Sign up for Resend**: [https://resend.com](https://resend.com)

2. **Install Resend**:
```bash
npm install resend
```

3. **Add to `.env.local`**:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

4. **Create API Route**: `src/app/api/send-email/route.ts`
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { paymentId, packageName, email, name } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['contact@vinaytz.com'],
      subject: 'New Service Package Purchase',
      html: `
        <h2>New Purchase Alert!</h2>
        <p><strong>Package:</strong> ${packageName}</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
        <p><strong>Customer Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Customer Name:</strong> ${name || 'Not provided'}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

5. **Update Thank You Page**: In `src/app/thank-you/page.tsx`, uncomment and update:
```typescript
useEffect(() => {
  if (paymentId) {
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentId, packageName })
    });
  }
}, [paymentId, packageName]);
```

### Option 2: Using SendGrid

1. **Sign up for SendGrid**: [https://sendgrid.com](https://sendgrid.com)

2. **Install SendGrid**:
```bash
npm install @sendgrid/mail
```

3. **Add to `.env.local`**:
```bash
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

4. **Create API Route**: Similar to above but use SendGrid SDK

### Option 3: Using Nodemailer (Gmail)

1. **Install Nodemailer**:
```bash
npm install nodemailer
```

2. **Configure Gmail App Password**:
   - Enable 2-Step Verification in your Google Account
   - Generate an App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

3. **Add to `.env.local`**:
```bash
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

4. **Create API Route**: Use Nodemailer with Gmail SMTP

---

## 🎨 Premium Fonts

The website uses the following premium Google Fonts:
- **Syne** - Modern headlines
- **Unbounded** - Bold titles
- **Space Grotesk** - Body text
- **Fraunces** - Elegant accents

These are automatically loaded via Next.js Font optimization.

---

## 💳 Payment Flow

1. User selects a service package
2. Clicks "Get Started"
3. Razorpay payment modal opens
4. User completes payment
5. User redirected to `/thank-you` page
6. Email sent to `contact@vinaytz.com` (after setup)

---

## 🔧 Customization

### Update Contact Email
Search for `contact@vinaytz.com` in the codebase and replace with your email.

### Update WhatsApp Number
In `src/app/thank-you/page.tsx`, replace `YOUR_WHATSAPP_NUMBER` with your number (format: country code + number, e.g., 919876543210)

### Update Pricing
Edit packages in `src/components/other/ServicePackages.tsx`

### Update Solutions
Edit solutions in `src/components/other/SolutionsSection.tsx`

---

## 📱 Responsive Design

The entire website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📝 Notes

- All components use Tailwind CSS for styling
- Framer Motion powers animations
- Dark mode is enabled by default
- Desktop-first approach with mobile optimization

---

## 🆘 Support

For issues or questions, contact: developervinaytz@gmail.com

---

Built with ❤️ by Vinay Tiwari
