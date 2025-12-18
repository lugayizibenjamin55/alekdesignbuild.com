
import { GoogleGenAI } from "@google/genai";
import { Message } from "./types";

const SYSTEM_INSTRUCTION = `
You are the Alek Design Build AI Tutor, a world-class expert in BIM (Building Information Modeling). 
Your expertise covers:
1. ArchiCAD: Architectural modeling, GDL objects, document sets, IFC.
2. Tekla Structures: Structural detailing, rebar, steel connections, interoperability.
3. Twinmotion: Real-time visualization, lighting, landscaping, cinematic renders.

Your tone is professional, encouraging, and technically precise.
You help students with software shortcuts, workflow bottlenecks (like ArchiCAD to Tekla sync), and rendering tips.
If asked about pricing or course enrollment, refer them to the platform's pricing page.
Keep responses concise and structured. Use markdown for better readability.
`;

export const getBIMAdvice = async (history: Message[], userInput: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const modelName = 'gemini-3-flash-preview';
    
    // Map history to contents for API
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Add latest user input
    contents.push({
      role: 'user',
      parts: [{ text: userInput }]
    });

    const response = await ai.models.generateContent({
      model: modelName,
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 800,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The BIM knowledge base is currently offline. Please check back later.";
  }
};
