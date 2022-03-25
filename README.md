# Qiscus Whatsapp SDK for NodeJS
The Qiscus whatsapp SDK for NodeJS make it easy to develop chatbot / autoreply using Qiscus Whatsapp API

# Instalation
```javascript
yarn add qiscus-whatsapp-sdk
# or
npm install --save qiscus-whatsapp-sdk
```
# Usage

## 1. Initialization
```javascript
const { Client } = require("qiscus-whatsapp-sdk");

const client = new Client({
  APP_ID: process.env.APP_ID,
  APP_SECRET: process.env.APP_SECRET,
  CHANNEL_ID: process.env.CHANNEL_ID,
});
```
## 2. Sending Text Message
```javascript
const phone = "62888888888888"

client.sendText(phone, "Hello from whatsapp")
```
## 3. Sending Media Message
```javascript
// send Audio
client.sendAudio(phone, "<audio url>")

// send Document
client.sendDocument(phone, "<Docs url>", "caption", "filename")

// send Image 
client.sendImage(phone, "<audio url>", "caption")

// send Video 
client.sendVideo(phone, "<video url>", "caption")

// send Sticker
client.sendSticker(phone, "<sticker url>")

```
## 4. Sending Location
```javascript
const location = {
    longitude: -122.425332,
    latitude: 37.758056,
    name: "Facebook HQ",
    address: "1 Hacker Way, Menlo Park, CA 94025",
}

client.sendLocation(phone, location)
```
## 5. Sending Button Reply
```javascript
client
  .sendReplyButtons(phone, {
    header: {
      type: "text",
      text: "ini header"
    },
    body: {
      text: "hallo",
    },
    action: {
      buttons: [
        {
          type: "reply",
          reply: { id: "1", title: "hallo" },
        },
      ],
    },
    footer: {
      text: "from insignia",
    },
  })
```
## 6. Sending List Messages
```javascript
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
```