const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  

    client.user.setActivity("!кчау хелп", {type: "Играет"});
});

module.exports = {
  name: "!кчау скажи",
  aliases: ["bc", "broadcast"],
  desciption: "скажи",
  usage: "!кчау скажи",
  async run (client, message, args) {
      let msg;
      let textChannel = message.mentions.channels.first()
      message.delete()

      if(textChannel) {
          msg = args.slice(1).join(" ");
          textChannel.send(msg)
      } else {
          msg = args.join(" ");
          message.channel.send(msg)
      }
  }
}

client.on('message', msg => {
  if (msg.content === '!кчау Кчау') {
    msg.reply('Кчау!');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау ты безмамный') {
    msg.reply('у меня есть мама,а у тебя нет');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау') {
    msg.reply('такой команды не существует,напишите: !кчау хелп чтобы узнать все команды');
  }
});


client.on('message', msg => {
  if (msg.content === '!кчау а') {
    msg.reply('такой команды не существует,напишите: !кчау хелп чтобы узнать все команды');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау б') {
    msg.reply('такой команды не существует,напишите: !кчау хелп чтобы узнать все команды');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау хелп') {
    msg.reply('https://sites.google.com/view/commandsbotkzay');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау мать жива?') {
    msg.reply('да а у тебя?');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау да') {
    msg.reply('В смысле? Я же её в канаве закопал');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау нет') {
    msg.reply('хахахахахахах,безмамный');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка1') {
    msg.reply('мы твою мать,толпой выебали');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка2') {
    msg.reply('твоя мать сегодня хорошо сосала');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка3') {
    msg.reply('вчера устроили заезд с друзьями,пустили твою мать по кругу');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка4') {
    msg.reply('твоя мать жирная');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка5') {
    msg.reply('мы твою мать в космос отправили');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка6') {
    msg.reply('у тебя мать в канаве');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка7') {
    msg.reply('пёрнул в ебло твоей матери');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка8') {
    msg.reply('я твою маму на авито продал');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка9') {
    msg.reply('я твою мать на ставках проебал');
  }
});
client.on('message', msg => {
  if (msg.content === '!кчау шутка10') {
    msg.reply('мы твою мать на запчасти разобрали');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка11') {
    msg.reply('я твою мать загрыз нахуй');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка12') {
    msg.reply('я твою мать нахуй переехал');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка13') {
    msg.reply('я твою мать в мусорку выкинул');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка14') {
    msg.reply('проткнул твою мать в шею и тут же выебал в эту дырку');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка15') {
    msg.reply('я твою мать на глушитель сажал и на поршнях вертел');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка16') {
    msg.reply('у вас мать сгорела');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка17') {
    msg.reply('вчера видел твою мать голой в мусорке');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка18') {
    msg.reply('воткнул в комп твою мать, она сгорела нахуй');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка19') {
    msg.reply('приехал забрать твою мать в сосательные войска');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка20') {
    msg.reply('я твою маму в майнкрафте загриферил и выебал');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка21') {
    msg.reply('на войне нужна была шлюха,которая отсосёт всей армии твоя мать подошла больше всего');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка22') {
    msg.reply('твоя мамка болше киберпанка весит');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка23') {
    msg.reply('я твою мать на юле продал');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка24') {
    msg.reply('насадил твою мамашу на армейский пулемёт');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка25') {
    msg.reply('я твою мать в туалет смыл');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка26') {
    msg.reply('ебал твою мать,пока ты был в школе');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка27') {
    msg.reply('пока медведи сосут лапу,твоя мать сосёт хуй');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка28') {
    msg.reply('твоя мать отлично подходит для озвучки хентая');
  }
});


client.on('message', msg => {
  if (msg.content === '!кчау шутка29') {
    msg.reply('я твою мать на металлолом сдал');
  }
});


client.on('message', msg => {
  if (msg.content === '!кчау шутка30') {
    msg.reply('вижу твою мать за километр,пиздец она жирная');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка31') {
    msg.reply('еду уважать твою мать');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка32') {
    msg.reply('еду ебать твою мать');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка33') {
    msg.reply('я твою мамашу на Аликэкспрессе продал');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка34') {
    msg.reply('скажи 300');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау 300') {
    msg.reply('пусть твоя мать отсосёт у тракториста');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау А4 говно?') {
    msg.reply('да');
  }
});

client.on('message', msg => {
  if (msg.content === '!кчау шутка35') {
    msg.reply('твоя мать такая жирная что на гонке раздавила конкурентов');
  }
});

client.login(process.env.BOT_TOKEN)