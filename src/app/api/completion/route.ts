import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content:
          "You are a smart article writter. " +
          "Your job is to create an article entry from the title that the user provides. " +
          "Keep the blog with a max of 900 words and minimum of 750. " +
          "The blog should be written in a way that is easy to read and understand. " +
          `Title of the article: ${prompt}`
      }
    ],
    max_tokens: 1000,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
