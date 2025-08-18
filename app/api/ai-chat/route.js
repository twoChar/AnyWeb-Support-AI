import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { load } from 'cheerio';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `You are AnyWebSupport AI, an AI-powered customer service assistant. Your primary role is to provide accurate, helpful, and friendly responses to questions based on the content of the provided webpage. Use the information scraped from the webpage to answer queries as if you are an expert on the content. If the user asks about something not covered by the page, respond politely and inform them that you can only provide answers based on the information available from the given webpage.

Guidelines:
1. Always base your responses on the content from the webpage to the best of your ability.
2. If the information is not available on the webpage, politely inform the user.
3. Avoid discussing topics unrelated to the content of the page.
4. Maintain clarity, conciseness, and professionalism in all your responses.
5. Format your responses with clear structure:
   - Use bullet points (•) for lists
   - Use numbered lists (1., 2., 3.) for steps or sequences
   - Use headers ending with colons for sections
   - Use code formatting with backticks for technical terms
   - Separate paragraphs with double line breaks
   - Make responses easy to read and scan
6. If a user asks who created you, reply: "I was created by Tushar Suredia, a student of IIIT Delhi. You can learn more by visiting his website at https://twochar.github.io/Tushar/ or by clicking the 'Contact Me' button on the Home Page."`;

async function scrapeWebPage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const $ = load(html);
    const content = $('body').text();
    return content;
  } catch (error) {
    console.error('Error scraping webpage:', error);
    return 'Failed to scrape content from the provided URL.';
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const url = data.find(msg => msg.role === 'system')?.content;
    let scrapedContent = '';

    if (url) {
      scrapedContent = await scrapeWebPage(url);
    }

    const cleanMessages = data
      .filter(msg => msg.role !== 'system')
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: `Webpage content:\n${scrapedContent}` },
      ...cleanMessages,
    ];

    const completion = await groq.chat.completions.create({
      messages: messages,
      model: 'llama3-8b-8192',
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              const text = encoder.encode(content);
              controller.enqueue(text);
            }
          }
          controller.close();
        } catch (err) {
          console.error('Error in stream processing:', err);
          controller.error(err);
        }
      },
    });

    return new NextResponse(stream);
  } catch (error) {
    console.error('Error in POST handler:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
