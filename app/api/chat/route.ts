import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const res = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You can optionally add a Hugging Face token if needed, but it's not required for public models.
      },
      body: JSON.stringify({
        inputs: {
          text: message,
        },
      }),
    });

    const data = await res.json();

    // Log the full response
    console.log('HuggingFace response:', data);

    const reply =
      data?.generated_text ||
      data?.[0]?.generated_text || // in case it's array-wrapped
      'Yanıt alınamadı.';

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Chat error:', err);
    return NextResponse.json(
      { reply: 'Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
