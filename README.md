
# PokeCord Pokemon Announcer
**THIS IS NOT A SELFBOT, I WILL NOT HELP YOU CREATE A SELFBOT.**

Discord bot that will help your users by announcing the pokemon that just appeared. 

**Instructions**
1. [Install NodeJS](https://nodejs.org/en/download/)
2. Download and extract [this](https://github.com/ehhthing/PokeCord-Pokemon-Announcer/archive/master.zip)
3. Go into the folder where all the files are located and run `npm install`
4. Create a Discord bot and get the authorization token.
5. Create a new file named `token.txt` and paste the token into the file.
6. Run `node app.js`
7. Invite the bot into your server by getting the client id number of your bot and visiting `https://discordapp.com/oauth2/authorize?&client_id={insert your client id here}&scope=bot`. Please note that you will only be able to invite the bot to your own server.
8. Done!

If you need any help setting this up, feel free to open an issue.

**How it works**

This bot works with a database of hashes for every pokemon image, every hash corresponds to a pokemon name. When pokecord announces that a wild pokemon has appeared, the bot gets the image and converts it into a .jpg. It then hashes it and finds the value in the map.


Please note that this is a quick and dirty solution, I will remove this message when I've properly dealt with errors and cleaned up the code.
