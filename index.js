const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Client, GatewayIntentBits, Collection, Events } = require('discord.js');

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.login(process.env.DISCORD_TOKEN);
client.commands = new Collection();

const commandDirectories = fs.readdirSync('./commands');
for(const directory of commandDirectories)
{
    const commandsPath = path.join('./commands', directory);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) 
    {
        const command = require(`./commands/${directory}/${file}`);

        if ('data' in command && 'execute' in command) 
            client.commands.set(command.data.name, command); 
        else 
            console.log(`[WARNING]: The command "${command.name}" is missing a required "data" or "execute" property.`);
    }
}

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if(!command)
    {
        console.error(`[ERROR]: No command called "${interaction.commandName}" was found!`);
        return;
    }

    try
    {
        await command.execute(interaction);
    }
    catch(error)
    {
        console.error(error);

        if(interaction.replied || interaction.deferred)
        {
            await interaction.followUp({ 
                content: "There was an error while executing this command...",
                ephemeral: true
            });
        }
        else
        {
            await interaction.reply({ 
                content: "There was an error while executing this command...",
                ephemeral: true
            });
        }
    }
});