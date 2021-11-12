const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');

module.exports.initiate = (client, message, args) => {
    let connection = joinVoiceChannel({
        channelId: message.channel.guild.members.cache.get(message.author.id).voice.channelId, //message.author.voiceChannel.id
        guildId: message.channel.guild.id,
        adapterCreator: message.channel.guild.voiceAdapterCreator
    })
    let res = createAudioResource('C:/Users/Epiphan/Documents/Smiley/Smiley Music/output/girl in red - Serotonin (official video).mp3');
    let audio = createAudioPlayer();
    audio.on(AudioPlayerStatus.Playing, () => {
        message.channel.send("fuck yea");
    });
    audio.play(res);
    connection.subscribe(audio);
}