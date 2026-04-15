# Portfolio Site

This is a static React + Vite portfolio that can be deployed on Hostinger shared hosting.

## Edit your details

Open `src/data/siteContent.js` and update:
- name, role, about text
- skills list
- projects list
- experience and education
- email, phone, location, and social links

You can add or delete projects, skills, links, and experience entries directly in that file.

## Run locally

```bash
npm install
npm run dev
```

## Build for Hostinger

```bash
npm run build
```

Upload everything inside the generated `dist` folder to your Hostinger `public_html` directory.

## Deploy to Firebase Hosting

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Open `.firebaserc` and replace `your-firebase-project-id` with your real Firebase project id.

4. Deploy:

```bash
npm run firebase:deploy
```

For local Firebase hosting preview:

```bash
npm run firebase:serve
```
