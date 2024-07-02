# Next.js Firebase Authentication with Google Sign-in

## Project Setup

To set up the project, follow these steps:

Clone the repository to your local machine and navigate to the project directory:

```bash
git clone git@github.com:yutakusuno/nextjs-firebase-auth-google-signin.git
cd nextjs-firebase-auth-google-signin
```

Create a new file named `.env` in the root directory of the project. And paste the Firebase configuration into it:

> If you have not yet set up your Firebase project, [this is for you.](https://firebase.google.com/codelabs/firebase-nextjs#2)

```
NEXT_PUBLIC_FIREBASE_API_KEY="your api key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your auth domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your project id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="you storage bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your messaging sender id"
NEXT_PUBLIC_FIREBASE_APP_ID="your app id"
```

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

That's it! You have successfully set up the project.
