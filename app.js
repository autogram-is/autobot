const { App } = require('@slack/bolt');

/* 
This sample slack application uses SocketMode
For the companion getting started setup guide, 
see: https://slack.dev/bolt-js/tutorial/getting-started 
*/

const GIT_REVISION = process.env.GIT_REV;

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

// Listens to incoming messages that contain "hello"
app.message('autobot', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`What's that, <@${message.user}>?`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();