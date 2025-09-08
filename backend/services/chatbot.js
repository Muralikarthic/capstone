import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getBotResponse(message) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(message);
    return result.response.text();
  } catch (err) {
    console.error("Error calling Gemini:", err);
    return "⚠️ Sorry, something went wrong with the AI.";
  }
}
