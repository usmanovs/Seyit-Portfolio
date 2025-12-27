
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initialized correctly with named parameter and direct process.env.API_KEY access
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      // Using ai.chats.create for stateful multi-turn conversation
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        history: history,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      // Simple implementation: send the message
      const response = await chat.sendMessage({ message: message });
      // Accessing .text property directly as per latest SDK guidelines
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "An error occurred while connecting to the AI assistant. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
