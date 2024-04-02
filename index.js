// Carga las variables de entorno del archivo .env
import dotenv from 'dotenv';
dotenv.config();

// Sets initial history
var historyLogI = [
  {
    role: "user",
    parts: "Hello!",
  },
  {
    role: "model",
    parts:
      "Hello! I am Techiee, an experimental chatbot built on Google's Gemini, developed by Tech and Budd. Or, your friendly neighborhood chatbot, as one might say. How can I help?",
  },
];

// Sets user added history log
var historyLog = [];
// makes func
function saveHistoryLogToFile(historyLog) {
  const json = JSON.stringify(historyLog, null, 2);
  fs.writeFileSync("historyLog.json", json);
}

// Makes the final log
var finalLog = historyLogI.concat(historyLog);

// Dependencies
import * as keep_alive from "./keep_alive.cjs";
import * as discord from "discord.js";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import fs from "fs"; // Cambio aquí: quitar * as fs
import * as fx from "fx";

// Defined variables
const MODEL = "gemini-1.0-pro-latest";
const API_KEY = process.env["gemini_api_key"];
const BOT_TOKEN = process.env["bot_token"];
const CHANNEL_ID = process.env["channel_id"];

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
const model = ai.getGenerativeModel({
  model: MODEL,
  safetySettings,
  generationConfig,
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

if (fs.existsSync("historyLog.json")) {
  const data = fs.readFileSync("historyLog.json", "utf8");
  historyLog = JSON.parse(data);
}

client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;
    if (message.channel.id !== CHANNEL_ID) return;

    // Limits history and removes first message from log.
    var limit = 30;
    if (historyLog.length > limit) {
      historyLog.shift();
      historyLog.shift();
    }

    const chat = model.startChat({
      history: finalLog,
      safetySettings,
    });

    const result = await chat.sendMessage(message.cleanContent);
    const response = await result.response;
    const text = response.text();

    // Saves user input and bot output into history
    historyLog.push({
      role: "user",
      parts: message.content,
    });

    historyLog.push({
      role: "model",
      parts: text,
    });

    // saves log
    saveHistoryLogToFile(historyLog);

    // Checking for empty messages
    if (text === "") {
      return;
    } else {
      await message.reply({
        content: text,
      });
    }

    // Saves output to log, for debugging
  } catch (e) {
    console.log(e);
  }
});
