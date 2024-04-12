# How to set Techiee up

First, grab your [Google AI Studio API Key](https://aistudio.google.com/app/apikey), your [Discord Bot Token](https://discord.com/developers/applications) and the Discord Channel ID (where Techiee will reply to messages in), you will need these for later!

You can use a hosting service like [Render](render.com) (which is free and works just fine). You can also host locally on your computer. If you host with Render, you can host 24/7.

## How to run locally
- If you don't have [Node.js](https://nodejs.org) installed, install it first!
1. Clone this repo, either via downloading it or via a Terminal/Command Prompt by doing:
   ```bash
   git clone https://github.com/MerBudd/Techiee.js.git
   cd Techiee.js
   ```
2. Rename [.env.example](https://github.com/MerBudd/Techiee.py/blob/main/.env.example) to `.env`
3. Open `.env` and put your Google AI Studio API Key, your bot's token, and channel ID `.env`
4. To install dependencies, do:
   ```bash
   npm install
   ```
5. To run the bot, do:
   ```bash
   node Techiee.js
   ```

## How to run in Render
1. Fork this repo
2. Go to [Render](https://render.com/)
3. Sign up or log in
4. In the dashboard, click "New", then "Web service". Then click "Next".
5. If your forked repo is private, connect your GitHub account to Render and click "Connect" on the repo. If it's public, you can simply search for it.
6. You can set the name to anything you want.
7. In the "Build command" section, put `npm install` and in the "Start command" section, put `node Techiee.js`
8. At the bottom, choose the free plan (it's more than enough to run Techiee)
9. At the VERY bottom, in the Enivronment secrets section, create 3 new secrets called `gemini_api_key` and `bot_token`, `channel_id` and set their values to your Google AI Studio API Key, your Bot's token and the channel which Techiee will respond in respectively
10. Click "Create Web Service"

## Do 24/7 with Render & UptimeRobot
1. Go to your newly created Web Service in Render
2. At the top, click the copy icon next to the blue URL to copy it (it should look something like `https://webservicename.onrender.com`)
3. Go to [UptimeRobot](https://uptimerobot.com) and sign up or log in
4. In the dashboard, click "New monitor"
5. Paste the URL you copied into the "URL to monitor" field (you can set the "friendly name" to anything you want)
6. Click "Create monitor"
