# CAHERA Investments Website

This is the official website for CAHERA Investments, refactored for production deployment on Netlify.

## Features

- **Netlify Functions**: Securely handles contact form submissions using Nodemailer.
- **Production-Ready**: Optimized build process and secure credential management.
- **Responsive Design**: Mobile-friendly and accessible UI using Tailwind CSS and Framer Motion.
- **Interactive Elements**: Google Maps integration, WhatsApp links, and embedded Google Forms.

## Deployment on Netlify

To deploy this website on Netlify, follow these steps:

1.  **Connect to GitHub**: Push this repository to your GitHub account.
2.  **Create a New Site**: In the Netlify dashboard, select "New site from Git" and choose your repository.
3.  **Configure Build Settings**:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
    -   **Functions directory**: `netlify/functions`
4.  **Set Environment Variables**:
    Go to **Site settings > Environment variables** and add the following:
    -   `NETLIFY_EMAIL_USER`: Your Gmail address (e.g., `caherainvestments@gmail.com`).
    -   `NETLIFY_EMAIL_PASS`: Your Gmail [App Password](https://myaccount.google.com/apppasswords).
5.  **Deploy**: Trigger a manual deploy or push to your main branch.

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  To test Netlify Functions locally, use the [Netlify CLI](https://docs.netlify.com/cli/get-started/):
    ```bash
    netlify dev
    ```

## Security Note

This application uses environment variables for sensitive credentials. **Never** commit your `.env` file or hardcode credentials in the frontend.
