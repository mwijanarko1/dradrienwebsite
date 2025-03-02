# Dr. Adrien's Professional Website

A modern, responsive professional website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Project Structure

```
src/
├── app/
│   ├── api/         # API routes
│   ├── components/  # React components
│   ├── lib/         # Utility functions, hooks, and contexts
│   ├── page.tsx     # Home page
│   └── layout.tsx   # Root layout
```

## Features

- Modern, responsive design
- Server-side rendering
- Real-time data updates
- User authentication
- AI-powered features
- Audio transcription capabilities
- Image generation

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run the development server: `npm run dev`

## Environment Variables

Create a `.env.local` file with the following variables:

```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# OpenAI
OPENAI_API_KEY=

# Anthropic
ANTHROPIC_API_KEY=

# Replicate
REPLICATE_API_KEY=

# Deepgram
DEEPGRAM_API_KEY=
```

## License

MIT License