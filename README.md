# <img src="https://github.com/MerBudd/Techiee/assets/82082386/43cc9180-c22f-4418-8949-9834a5066089" width=35 height=35> Techiee

Techiee is an experimental Discord AI Chatbot based on Google's Gemini Pro.

## What CAN Techie do?

Techiee is... Well, a chatbot, like ChatGPT or Gemini. It uses the same Gemini (models) that Gemini (the chatbot) is based on, however, with the safety settings disabled (by default) so you can mess around with it.

## Here's how YOU can configure Techiee

You can use any Gemini model you want, even 1.5 Pro if you have access to it (you can change model by changing the value of MODEL in index.js) but if you wanna use 1.5 Pro you may NOT use it in production as that is against Google AI Studio's TOS.

You can also tweak other settings like the safety settings, temperature, TopK etc.

All you'll need to do is to set the environment secrets for the Discord Channel ID, your Discord Bot Token (https://discord.com/developers/applications) and your Google AI Studio API Key (which you can grab from https://aistudio.google.com/app/apikey).

You can use a hosting service like Render (which is free and works just fine) (render.com), grab your web server URL, and then use the keep_alive.cjs file to run it 24/7 with UptimeRobot (you can find detailed tutorials online)

We can't use Replit (at least, if you want to host it 24/ for free) because they killed their webservers. You can pay Replit to get it running 24/7 with their new "Deployments" if you want.
