# 🌱 ThinkGreenly (Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

# 📌 Overview

A Next.js-powered community platform for sharing and voting on sustainable
ideas. Admins moderate submissions, while members collaborate on eco-friendly
solutions.

## 🌍 Live URL

- [Front-end](https://think-greenly-one.vercel.app)
- [Back-end](https://think-greenly-serverside.vercel.app)

## 📂 Repository Link

- [Front-end](https://github.com/khaledssbd/ThinkGreenly)
- [Back-end](https://github.com/khaledssbd/ThinkGreenly-apis)

## 🛠️ Features

- **User Authentication**: JWT-based login/registration.
- **Idea Management**: Submit, draft, comment and vote on ideas (Reddit-style).
- **Admin Dashboard**: Approve/reject ideas, manage categories.
- **Responsive UI**: Built with Tailwind CSS & Shadcn UI.
- **Payment Integration**: SSLCommerz for "Paid Ideas."

## 🏗️ Tech Stack

#### Frontend

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Validation**: Zod

#### Backend

- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Payment Method**: SSL Commerz
- **Image hosting**: Multer & Cloudinary
- **Mail Provider**: Nodemailer
- **Validation**: Zod

---

## 🏃‍♂️ Setup Guide (Frontend)

### Prerequisites

- Node.js ≥18.x
- npm/yarn/pnpm

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/khaledssbd/ThinkGreenly.git
   cd ThinkGreenly

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create .env file with:

   ```bash
   NEXT_PUBLIC_API_URL="your_backend_url"

   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

## 🏃‍♂️ Setup Guide (Backend)

### Prerequisites

- Node.js ≥18.x
- npm/yarn/pnpm

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/khaledssbd/ThinkGreenly-apis.git
   cd ThinkGreenly-apis

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create .env file with:

   ```bash
   NODE_ENV="development"
   PORT=5000
   DATABASE_URL=""

   JWT_SECRET=""
   JWT_EXPIRATION="15d"
   JWT_REFRESH=""
   JWT_REFRESH_EXPIRATION="7d"

   RESET_PASSWORD_SECRET=""
   RESET_PASSWORD_EXPIRATION="10m"
   RESET_PASSWORD_LINK="http://localhost:5000/auth/reset-password"

   BCRYPT_SALT_ROUNDS=12
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER=""
   SMTP_APP_PASSWORD=""

   CLOUDINARY_CLOUD_NAME=""
   CLOUDINARY_API_KEY=""
   CLOUDINARY_API_SECRET=""

   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

![alt text](think-greenly-one.vercel.app_.png)

## License

MIT (do whatever you want to do :smile: )
