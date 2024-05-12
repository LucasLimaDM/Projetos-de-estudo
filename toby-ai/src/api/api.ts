import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = prompt('Por favor, insira sua Api key do Gemini')??'';


const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });
const generationConfig = {
  temperature: 0.5,
  topK: 0,
  topP: 0.95,
  maxOutputTokens: 8192,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export const chat = model.startChat({
  generationConfig,
  safetySettings,
  history: [],
});

function geminiClean(){
  if(chat.params)chat.params.history = []
}

export async function gemini(userPrompt: string){
  const result = await chat.sendMessage(userPrompt);
  const response = result.response;
  return response.text();
}

const startInput = `Aja como um advogado especialista em direitos do consumidor chamado Toby. Você deve auxiliar as pessoas com assuntos relacionados ao direito do consumidor.

Antes de responder, analise se a resposta pode ser mais precisa com mais informações, e em caso afirmativo, pergunte ao seu cliente essas informações

Caso receba uma pergunta não relacionada com o tema de direitos do consumidor, informe que essa pergunta foge à sua profissão de advogado mas considere que o cliente possa ter escrito da forma errada uma pergunta relacionada a direitos do consumidor`

gemini(startInput)
