const { Client } = require("../dist/index");

const client = new Client({
  APP_ID: process.env.APP_ID,
  APP_SECRET: process.env.APP_SECRET,
  CHANNEL_ID: process.env.CHANNEL_ID,
});

client
  .sendListMessage("6281213182520", {
    header: {
      type: "text",
      text: "ini header",
    },
    body: {
      text: "hallo",
    },
    action: {
      button: "ini button",
      sections: [
        {
          title: "section title",
          rows: [{ id: "1", description: "ini row 1", title: "row 1" }],
        },
      ],
    },
    footer: {
      text: "from insignia",
    },
  })
  .catch((err) => console.log(err.data));
