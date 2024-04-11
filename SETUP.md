# How to set Techiee up

All you'll need to do is to set the environment secrets for your Discord Channel ID (where the bot will reply to in), your [Google AI Studio API Key](https://aistudio.google.com/app/apikey) and your [Discord Bot Token](https://discord.com/developers/applications).

You can use a hosting service like [Render](render.com) (which is free and works just fine). You can also host locally on your computer. If you host with Render, you can host 24/7.

## How to run locally
- Clone this repo
- Rename "[.env.example](https://github.com/MerBudd/Techiee.py/blob/main/.env.example)" to ".env"
- Put your tokens, channel ID and keys in .env
- uhhh I'll continue later lol

## How to run in Render
- Fork this repo
- Go to [Render](https://render.com/)
- Sign up or log in
- In the dashboard, click "New", then "Web service". Then click "Next".
- If your forked repo is private, connect your GitHub account to Render and click "Connect" on the repo. If it's public, you can simply search for it.
- You can set the name to anything you want.
- In the "Build command" section, put "npm install" (without the quotes) and in the "Start command" section, put "node Techiee.js" (without the quotes)
- At the bottom, choose the free plan (it's more than enough to run Techiee)
- At the VERY bottom, in the Enivronment secrets section, create 2 new secrets called "channel_id", "gemini_api_key" and "bot_token" (all 3 without the quotes), and set their values to the channel which Techiee will respond in, your Google AI Studio API Key and your Bot's token respectively (Where to grab them is listed at the very top of this file)
- Click "Create Web Service"

## Do 24/7 with Render
- Go to your newly created Web Service
- At the top, click the copy icon next to the blue URL to copy it (it should look something like https://webservicename.onrender.com)
- Go to [UptimeRobot](https://uptimerobot.com) and sign up or log in
- In the dashboard, click "New monitor"
- Paste the URL you copied into the "URL to monitor" field (you can set the "friendly name" to anything you want)
- Click "Create monitor"
