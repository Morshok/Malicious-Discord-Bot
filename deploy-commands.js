const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { REST, Routes } = require('discord.js');

dotenv.config();

const commands = [];

const commandDirectories = fs.readdirSync('./commands');
for(const directory of commandDirectories)
{
    const commandsPath = path.join('./commands', directory);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) 
    {
        const command = require(`./commands/${directory}/${file}`);

        if ('data' in command && 'execute' in command) 
            commands.push(command.data.toJSON());
        else 
            console.log(`[WARNING]: The command "${command.name}" is missing a required "data" or "execute" property.`);
    }
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
    try
    {
        console.log(`[INFO]: Started refreshing ${commands.length} application (/) commands...`);

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );
        
        console.log(`[INFO]: Successfully refreshed ${data.length} application (/) commands...`);
    }
    catch(error)
    {
        console.error(error);
    }
})();