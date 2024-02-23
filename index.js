// Dependencies

import * as keep_alive from './keep_alive.cjs';
import * as discord from 'discord.js';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";


// Defined variables

const MODEL = "gemini-1.0-pro-latest"
const API_KEY = process.env['gemini_api_key']
const BOT_TOKEN = process.env['bot_token']
const CHANNEL_ID = process.env['channel_id']


// Gemini Configs

     const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
    
];

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };


// Something bout Gemini idunno

const ai = new GoogleGenerativeAI(API_KEY);
const model = ai.getGenerativeModel({ model: MODEL, safetySettings, generationConfig });


// Bot

const client = new discord.Client({
  intents: Object.keys(discord.GatewayIntentBits),
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.login(BOT_TOKEN);

 client.on("messageCreate", async (message) => {
  try{
    if (message.author.bot) return;
    if (message.channel.id !== CHANNEL_ID) return;

       
// Sets initial history
    var historyLogI = [


    {
      role: "user",
          parts: "Hello!",
            },
    {
      role: "model",
          parts: "Hello! I am Techiee, an experimental chatbot built on Google's Gemini, developed by Tech and Budd. Or, your friendly neighborhood chatbot, as one might say. How can I help you?",
            },
                        ];

// Sets user added history log
 
    var historyLog = [

    ];


// Makes the final log

   // var finalLog = historyLogI.concat(historyLog);

       
 // Limits history and removes first message from log.
       
     var limit = 30;
     if (historyLog.length >  limit) {
        historyLog.shift();
        historyLog.shift();
     }

    const chat = model.startChat({
     //history: finalLog,
     history: historyLogI.concat(historyLog)
     safetySettings,
    });
       
const result = await chat.sendMessage(message.cleanContent);     
const response = await result.response;
const text = response.text();


// Saves user input and bot output into history
       
  historyLog.push({
    role: "user",
    parts: message,
        });

   historyLog.push({
    role: "model",
    parts: text,
   });


   // Checking for empty messages
       
  if (text === "") {return
    
  } else {

    await message.reply({
      content: text
    })
  }

// Saves output to log, for debugging
       
  }
   catch(e) {
    console.log(e)
   }

});
