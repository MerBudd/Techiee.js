// Dependencies

import * as keep_alive from './keep_alive.cjs';
import * as discord from 'discord.js';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";


// Defined variables

const MODEL = "gemini-1.0-pro-latest"
const API_KEY = process.env['gemini_api_key']
const BOT_TOKEN = process.env['bot_token']
const CHANNEL_ID = process.env['channel_id']

// Gemini Configs... & stuff

async function geminiAI(userInput) {
try{
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

    const model = ai.getGenerativeModel({ 
        model: MODEL,
        safetySettings,
    });
    //Sets how Ai responds
    const chat = model.startChat({
        history: historyLog,
        safetySettings,
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
    });

// Bot

const client = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.login(BOT_TOKEN);

client.on('messageCreate', async (message) => {
    //Checks for message sent by user, in correct channel, and history pattern
    if(!message.author.bot && message.channel.id == channel && historyLog[historyLog.length-1].role != "user"){
        //Checks for user > model pattern
         if (historyLog[historyLog.length-1].role != "user"){
            //Starts generation timer
            const start = Date.now();
            message.channel.send('*Generating*').then(msg => {setTimeout(() => msg.delete(), 2000)})
            geminiAI(message.content).then(text => {
                const end = Date.now();
                let timeTaken = ((end-start)*.001).toFixed(3);
                //Checks for empty message
                if (text !== ""){
                    //Checks Discord Message Limit
                    if (text.length > 1999){
                        let size = Math.ceil(text.length/2000);
                        let half = Math.ceil(text.length/size);
                        for(i = 0; i < size; i++){
                            message.channel.send(text.substring(i*half,(i+1) *half));
                        }
                        message.channel.send("\n***Generation Time: " +timeTaken+ 's***');
                    } else {
                        message.channel.send(text + " \n***Generation Time: " +timeTaken + 's***')
                    }
                }
            })
        }
    }
})


// Sets initial history

let historyLog = [
  {
    role: "user",
    parts: "Hello!",
  },
  {
    role: "model",
    parts: "Hello! I am Techiee, an experimental chatbot built on Google's Gemini, developed by Tech and Budd. Or, your friendly neighborhood chatbot, as one might say. How can I help you?",
  },
];


// Saves User input into history
historyLog.push({
     role: "user",
     parts: userInput,
    });
    const msg = userInput;
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    //Saves Ai output into history
    historyLog.push({
        role: "model",
        parts: text,
    });
     
    // Limits history, Change limit to keep more history
    let limit = 30;
    if (historyLog.length >  limit) {
        historyLog.shift();
        historyLog.shift();
    }
    return text;
    


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

/*

    //Saves User input into history
    historyLog.push({
        role: "user",
        parts: userInput,
    });
    const msg = userInput;
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    //Saves Ai output into history
    historyLog.push({
        role: "model",
        parts: text,
    });
    // Limits history, Change limit to keep more history
    let limit = 30;
    if (historyLog.length >  limit) {
        historyLog.shift();
        historyLog.shift();
    }
    return text;
    }
*/
