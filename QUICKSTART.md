# 🚀 Quick Start Guide

Get AnyWebSupport AI running in 5 minutes!

## Prerequisites
- Node.js 18+ 
- Groq API key

## Step 1: Clone & Setup
```bash
git clone <repository-url>
cd AnyWebSupport-AI-Customer-Service-for-Any-Website
./setup.sh
```

## Step 2: Get Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up/login and create an API key
3. Copy the key

## Step 3: Configure Environment
Edit `.env.local` and replace:
```bash
GROQ_API_KEY=your_groq_api_key_here
```
with your actual API key.

## Step 4: Run the Application
```bash
npm run dev
```

## Step 5: Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 What You Can Do Now

1. **Homepage**: View project information and features
2. **Dashboard**: Click "Get Started" to access the AI chat
3. **Enter Website URL**: Provide any website URL you want the AI to learn about
4. **Ask Questions**: The AI will answer based on the scraped website content
5. **Multi-language**: Switch between English, Spanish, French, Chinese, and Hindi

## 🔧 Troubleshooting

### "Groq API key not found"
- Ensure `.env.local` exists with your API key
- Restart the server after adding the key

### "Failed to scrape content"
- Check if the URL is accessible
- Some websites may block scraping

### Build errors
- Run `./setup.sh` to reinstall dependencies

## 📚 Need Help?
- Check the full [README.md](README.md)
- Run `./setup.sh` for automated setup
- Ensure you have Node.js 18+ installed

## 🎉 You're Ready!
The AI will now scrape any website you provide and answer questions based on its content using Groq's fast LLM!
