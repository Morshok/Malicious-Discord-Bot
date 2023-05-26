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
To setup and try out the exploit yourselves, the first steps are to first and foremost run the following commando:

```bash
git clone https://github.com/Morshok/Malicious-Discord-Bot.git
```

Then, head over to the [Discord Developer Portal](https://discord.com/developers/applications), login, and create a New Application. The image down below illustrates exactly this: 

<br /><br />
![New Application](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/new_application.png)
<br /><br />

Next step is heading over to the "Bot" tab, and pressing "Add bot". <br />
Then add the bot to your discord server. This can be done by going into the "OAuth - URL Generator" tab, selecting "bot" as the scope:

<br /><br />
![Bot Token](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/scope.png)
<br /><br />

Select "Administrator" as the bot permission:

<br /><br />
![Bot Token](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/bot_permissions.png)
<br /><br />

Then simply click on the generated link (here greyed out as a security measure) and specify what server the bot should be invited into. <br /><br />
One final thing that is needed from the [Discord Developer Portal](https://discord.com/developers/applications) is the "Bot Token", which can be found in the "Bot" tab, as can be seen in the image provided down below:

<br /><br />
![Bot Token](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/bot_token.png)
<br /><br />

Now this repository can be cloned into any directory you desire. One last thing is to run:
```bash
npm install dotenv
```
inside of this repository, and then create a key-value pair inside of the generated ".env" file called DISCORD_TOKEN. The value of DISCORD_TOKEN should be the "Bot Token" fetched from the [Discord Developer Portal](https://discord.com/developers/applications). <br /><br />
Some other important fields to fill in inside of the ".env" file includes:
- CLIENT_ID, called APPLICATION ID by the discord API. 
  - Can be found under the tab "General Information" on the [Discord Developer Portal](https://discord.com/developers/applications).
- GUILD_ID, the id of the server which the bot is to be invited into
  - Can be found inside the Discord Application by first heading over to Settings -> App Settings -> Advanced. 
  - Then turn on Developer Mode:
  - ![Developer Mode](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/developer_mode.png)
  - Then simply right click on top of your server's name in the top left corner. 
  - An option to copy the Server ID will appear:
  - ![Server ID](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/copy_server_id.png)
  - Pressing it will copy the Server ID to your clipboard.
- USER_ID, the id of the user whose privileges should be escalated.
  - Can be found inside the Discord Application by first heading over to Settings -> My Account.
  - Then simply press the three dots next to your user profile, and then press "Copy User ID":
  - ![User ID](https://github.com/Morshok/readme-images/blob/master/Malicious-Discord-Bot/copy_user_id.png)
  - This places your "User ID" onto the clipboard.

<br />

**NOTE:** This exploit will only work if the bot is given "Administrator" permissions.
___

### How To Use The Application:

If the previous steps have been followed, now is the time to open up a terminal and run:
```
node deploy-commands
```
This is simply to register the SlashCommands to the client. <br /><br />
Then run:
```
node .
```
or 
```
node index.js
```
The result will be the same. <br />
I hope you enjoy exploiting your own server! :stuck_out_tongue_winking_eye:

___
