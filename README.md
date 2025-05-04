# 🌱 Sustainability Idea Hub (Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

# 📌 Overview

A Next.js-powered community platform for sharing and voting on sustainable ideas. Admins moderate submissions, while members collaborate on eco-friendly solutions.

## 🌍 Live URL

Want to test your own, please use this link
[Live Deployment](https://think-greenly-serverside.vercel.app/) |

## 🛠️ Features

- **User Authentication**: JWT-based login/signup.
- **Idea Management**: Submit, draft, and vote on ideas (Reddit-style).
- **Admin Dashboard**: Approve/reject ideas, manage categories.
- **Responsive UI**: Built with Tailwind CSS.
- **Payment Integration**: SSLCommerz for "Paid Ideas."

## 🏗️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context / Zustand
- **API Calls**: Axios
- **Form Handling**: React Hook Form

---

## 🏃‍♂️ Setup Guide

### Prerequisites

- Node.js ≥18.x
- npm/yarn/pnpm

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/khaledssbd/ThinkGreenly.git sustainability-hub-frontend
   cd sustainability-hub-frontend

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create .env file:

   ```bash
   env
   NEXT_PUBLIC_API_URL=""

   ```

4. Run the dev server:
   ```bash
   npm run dev
   ```

## How to Contribute

1. Fork the repository.

2. Create a branch:

   ```
   bash
   git checkout -b feat/your-feature

   ```

3. Commit changes:

   ```
   bash
   git commit -m "Add: your feature"

   ```

4. Push to your fork:

   ```
   bash
   git push origin feat/your-feature

   ```

5. Open a Pull Request with a clear description.

## License

MIT (do whatever you want to do :smile: )
