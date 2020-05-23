const Discord = require('discord.js');
const dotenv = require('dotenv');
const {askBot} = require("./nlp/nlp-helpers");

dotenv.config({path:'.env'});


const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  
  if(msg.content){
    
    askBot(msg.content).then(response => {

      if(msg.author.bot==false){
        console.log(msg);

        if(response.intent!= 'None'){
          msg.reply(response.answer);
        }
        
      }
      
    }).catch(error => console.log(error));
  
    
  }
  

});

client.login(process.env.DISCORD_TOKEN);