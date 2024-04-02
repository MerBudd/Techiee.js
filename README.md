# <img src="https://github.com/MerBudd/Techiee/assets/82082386/43cc9180-c22f-4418-8949-9834a5066089" width=35 height=35> Techiee

Techiee is an experimental Discord AI Chatbot based on Google's Gemini Pro.

Techiee is still a work in progress, so not everything works yet!

Techiee can be VERY random, but I love him for that...

<img src="https://github.com/MerBudd/Techiee/assets/82082386/d9b79ff9-9274-4959-8cd6-317026625c84" width=540 height=283>

## !! If you want to fork this repo, you can, but there are much better chatbots based on Gemini to fork! Many of Techiee's functions still aren't done! !!

## What CAN Techiee do?

Techiee is... Well, a chatbot, like ChatGPT or Gemini. It uses the same Gemini (models) that Gemini (the chatbot) is based on, however, in Discord!

## Here's how YOU can configure Techiee

You can tweak settings like the safety settings, temperature, TopK, etc.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MerBudd/Techiee.git
   cd Techiee
   ```

2. **Set Environment Variables:**
   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and add the following variables:
     ```plaintext
     gemini_api_key=YOUR_GOOGLE_AI_STUDIO_API_KEY
     bot_token=YOUR_DISCORD_BOT_TOKEN
     channel_id=YOUR_DISCORD_CHANNEL_ID
     ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Run the Bot:**
   ```bash
   node .
   ```

Ensure you have Node.js installed on your system before proceeding with the installation.

## Features

### Features done

- The actual bot
- 24/7

### Features being worked on

- History log (it's like half-works? Most of the time it doesn't work, but sometimes it decides to remember stuff.)
- Safety settings (similar to the history log)

### Features to-do

- There aren't currently any features we want to work on that we haven't started working on yet.
