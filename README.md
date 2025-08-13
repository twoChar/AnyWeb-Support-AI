# AnyWebSupport AI - AI-Powered Customer Service for Any Website

A Next.js application that provides AI-powered customer service by scraping website content and answering user questions using Groq's fast LLM models.

## Features

- 🌐 **Web Scraping**: Automatically extracts content from any website URL
- 🤖 **AI-Powered Responses**: Uses Groq's Llama 3.1 model to provide accurate answers based on website content
- 🌍 **Multi-language Support**: Supports English, Spanish, French, Chinese, and Hindi
- 💬 **Real-time Chat**: Interactive chat interface with streaming responses
- 📱 **Responsive Design**: Modern UI built with Material-UI and Tailwind CSS
- 🔥 **Firebase Integration**: Stores feedback and chat data
- ⚡ **Next.js 14**: Built with the latest Next.js features including App Router
- 🚀 **Fast AI Responses**: Powered by Groq's ultra-fast inference

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Groq API key
- Firebase project (optional, for feedback storage)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AnyWebSupport-AI-Customer-Service-for-Any-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   # Groq API Key - Get yours from https://console.groq.com/
   GROQ_API_KEY=your_actual_groq_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Homepage**: View the landing page with project information
2. **Dashboard**: Click "Get Started" to access the AI chat interface
3. **Enter Website URL**: Provide the URL of the website you want the AI to learn about
4. **Ask Questions**: The AI will answer based on the scraped website content
5. **Language Support**: Switch between different languages using the language buttons
6. **Feedback**: Provide feedback on the AI responses

## Project Structure

```
├── app/
│   ├── api/chat/          # Groq chat API endpoint
│   ├── dashboard/         # Main chat interface
│   ├── [lang]/            # Language-specific translation files
│   ├── globals.css        # Global styles
│   ├── i18n.js           # Internationalization setup
│   └── layout.js         # Root layout component
├── firebase.js            # Firebase configuration
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## API Endpoints

- `POST /api/chat` - Handles chat requests with Groq integration

## Technologies Used

- **Frontend**: Next.js 14, React 18, Material-UI, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: Groq LLM (Llama 3.1-8b-instant)
- **Database**: Firebase Firestore
- **Web Scraping**: Cheerio
- **Internationalization**: i18next, react-i18next

## Configuration

### Groq
- Get your API key from [Groq Console](https://console.groq.com/)
- Add it to `.env.local` as `GROQ_API_KEY`
- Groq offers generous free tiers and ultra-fast inference

### Firebase (Optional)
- Create a Firebase project
- Update `firebase.js` with your configuration
- Enable Firestore database

## Troubleshooting

### Common Issues

1. **"Groq API key not found"**
   - Ensure `.env.local` exists with `GROQ_API_KEY`
   - Restart the development server after adding environment variables

2. **"Failed to scrape content"**
   - Check if the URL is accessible
   - Some websites may block scraping

3. **Build errors**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Development

- **Lint**: `npm run lint`
- **Build**: `npm run build`
- **Start**: `npm start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Author

Created by Daivya Shah, a student at New York University.
Visit [https://daivyashah.com](https://daivyashah.com) for more information.
# AnyWeb-Support-AI
# AnyWeb-Support-AI
# AnyWeb-Support-AI
# AnyWeb-Support-AI
