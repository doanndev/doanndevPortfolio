
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTerminalResponse = async (query: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash', // Using a fast, reliable model for terminal interaction
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are a terminal assistant for a developer portfolio. 
          Current Portfolio Context: ${context}.
          User Input: ${query}.
          Respond in a concise, technical terminal format. Keep it short.` }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 200,
      }
    });
    return response.text || "Command execution failed. Unknown system error.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to neural processing unit. Try again later.";
  }
};
