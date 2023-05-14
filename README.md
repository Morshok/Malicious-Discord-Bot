# Malicious-Discord-Bot
As the name suggests, the application features a malicious discord bot as a proof-of-concept malicious workspace communication platform application. The project is part of TDA602 - Language Based Security, a course in language based security, offered by Chalmers University of Technology.
### Table of Contents
- [General Info](#general-info)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [How To Use The Application](#how-to-use-the-application)

___

### General Info:
The application was made using Node.js, together with the popular Discord API "discord.js". 
It was created as a proof-of-concept attack application, and gives the user whose USER_ID is specified in the ".env" file administrator permissions on the discord server the bot is invited into. 
This is only done when the SlashCommand "help" is called from within the discord server.

___

### Technologies Used:
This project utilizes the following technologies:
- Node.js
- discord.js

___

### Setup:
To setup and try out the exploit yourselves, the first step is to head over to the [Discord Developer Portal](https://discord.com/developers/applications), login, and create a New Application. 
Next step is heading over to the "Bot" tab, and press "Add bot". The next step is adding the bot to your discord server. This can be done by going into the "OAuth - URL Generator" tab, selecting "bot" as the scope, and then "Administrator" as the bot permission. Then, simply click on the generated link and specify what server the bot should be invited into. One final thing that is needed from the [Discord Developer Portal](https://discord.com/developers/applications) is the "Bot Token", which can be found in the "Bot" tab.
<br />
**NOTE:** This exploit will only work if the bot is given "Administrator" permissions.

Now this repository can be cloned into any directory you desire. One last thing is to run "npm install dotenv" inside of this repository, and then create a key-value pair inside of the generated ".env" file called DISCORD_TOKEN. The value of DISCORD_TOKEN should be the "Bot Token" fetched from the [Discord Developer Portal](https://discord.com/developers/applications).
Some other important fields to fill in inside of the ".env" file is the CLIENT_ID, GUILD_ID and USER_ID, the id of the user whose privileges should be escalated.

___

### How To Use The Application:

If the previous steps have been followed, now is the time to open up a terminal and run "node deploy-commands". This is simply to register the SlashCommands to the client. Then run "node ." or "node index.js", the result will be the same, and enjoy exploiting your own server! :stuck_out_tongue_winking_eye:

___

**Final Note:** Images to facilitate the setup process as well as images showcasing how to use the application will be added in due time.
