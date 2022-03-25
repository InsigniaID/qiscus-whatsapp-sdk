import { Client } from "../src";

const client = new Client({
  APP_ID: process.env.APP_ID,
  APP_SECRET: process.env.APP_SECRET,
  CHANNEL_ID: process.env.CHANNEL_ID,
});

describe("Client", () => {
  it("should send text", async () => {
    client
      .sendText("6281213182520", null)
      .then((data) => expect(data).toBeTruthy);
  });
});
