# NextJsApp

A simple **Next.js 15 (App Router)** application with Google authentication using **NextAuth.js**, public product listing, product details, and a protected product management page for adding products.

---

## Features

- **Landing Page** (`/`)  
  - Hero section  
  - Product highlights  
  - Navbar and Footer  

- **Authentication**  
  - Login with **Google** via NextAuth  
  - Session-based protected routes  

- **Product Pages**  
  - Public product list (`/products`)  
  - Product details page (`/products/[id]`)  

- **Protected Page**  
  - Add product page (`/dashboard/add-product`)  
  - Only accessible when logged in  

---

## Technologies Used

- **Next.js 15 (App Router)**  
- **React**  
- **Tailwind CSS**  
- **NextAuth.js** (Google Authentication)  
- **MongoDB** (storing products)  
- **Vercel** (deployment)

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/nextassignment.git
cd nextassignment
Install dependencies

npm install
Create a .env file in the root folder with your environment variables:

MONGODB_URI=<your_mongodb_connection_string>
NEXTAUTH_SECRET=<your_nextauth_secret>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
Run the development server


npm run dev
Open http://localhost:3000 in your browser.

Deployment
Push your project to GitHub.

Connect your repository to Vercel.

Set your environment variables in Vercel dashboard.

Deploy the project.

Route Summary
Route	Access	Description
/	Public	Landing page with navbar, hero, product highlights, footer
/login	Public	Google login page (NextAuth)
/products	Public	List of all products
/products/[id]	Public	Details of a single product
/dashboard/add-product	Protected	Add new product (only logged-in users)

Notes
Protected routes use getServerSession(authOptions) from NextAuth to check authentication.

MongoDB stores product data, which is fetched dynamically in pages.

Images from external sources require configuration in next.config.mjs:

js
Copy
Edit
images: {
  domains: ["i.ibb.co.com"],
}
Author
Md. Habibur Rahman