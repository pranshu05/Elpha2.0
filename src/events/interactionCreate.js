const Discord = require('discord.js')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if(!interaction.isCommand()) return interaction.reply(`interaction isn't a valid command!`)
        if(!interaction.guild) return interaction.reply(`You can use slash commands only in a server!`)
        
        const command = interaction.client.commands.get(interaction.commandName)

        if(!command) return
        
        try{
            await command.execute(interaction)
            console.log(`${interaction.commandName} was used by ${interaction.user}`)
        }catch(err){
            if (err)
                console.error(err)
            await interaction.reply({
                content: 'some err occured!',
                ephemeral: true
            })
        }
    }
}