#!/bin/bash

echo "🚀 AnyWebSupport AI Setup Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "   Please upgrade Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) is installed"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm -v) is installed"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo ""
    echo "🔑 Creating environment file..."
    cat > .env.local << EOF
# Groq API Key - Get yours from https://console.groq.com/
GROQ_API_KEY=your_groq_api_key_here

# Firebase configuration (optional - already configured in firebase.js)
# FIREBASE_API_KEY=your_firebase_api_key_here
# FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
# FIREBASE_PROJECT_ID=your_firebase_project_id_here
EOF
    echo "✅ Created .env.local file"
    echo "⚠️  IMPORTANT: Update .env.local with your actual Groq API key"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Get your Groq API key from: https://console.groq.com/"
echo "2. Update .env.local with your API key"
echo "3. Run: npm run dev"
echo "4. Open: http://localhost:3000"
echo ""
echo "📚 For more information, see README.md"
