import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available as an environment variable
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.warn("API_KEY environment variable not set. Gemini features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const generateWordOfHope = async (): Promise<string> => {
    if (!apiKey) {
        // Return a default message if API key is not set
        return "ぬくもり";
    }

    try {
        const prompt = "「可愛い」「温かい」「優しい」「きらめき」「希望」といったテーマに関連する、心温まる美しい日本語の単語を一つだけ生成してください。解説や他の言葉は含めず、単語のみを返してください。例：こもれび、ぬくもり、ひだまり";
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.9,
                thinkingConfig: { thinkingBudget: 0 } 
            }
        });
        
        const text = response.text.trim().replace(/[\s"「」『』]/g, '');
        // Return the generated word, or a fallback if the response is empty
        return text || "こもれび";
    } catch (error) {
        console.error("Error generating word of hope:", error);
        // Return a default word in case of an API error
        return "ひだまり";
    }
};