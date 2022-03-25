import { WHATSAPP_BASE_API } from "./endpoint";
import HTTPClient from "./http";
import * as Types from "./types";

export default class Client {
  private config: Types.ClientConfig;
  private http: HTTPClient;

  constructor(config: Types.ClientConfig) {
    if (!config.APP_ID || !config.APP_SECRET) {
      throw new Error("no APP_ID or APP_SECRET");
    }

    this.config = config;
    this.http = new HTTPClient({
      baseURL: `${WHATSAPP_BASE_API}/whatsapp/v1/${config.APP_ID}/${config.CHANNEL_ID}`,
      defaultHeaders: {
        "Qiscus-App-Id": config.APP_ID,
        "Qiscus-Secret-Key": config.APP_SECRET,
      },
    });
  }

  public sendText(to: string, text: string): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "text",
      to,
      text: { body: text },
    });
  }

  public sendAudio(
    to: string,
    link: string
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "audio",
      to,
      audio: { link },
    });
  }

  public sendDocument(
    to: string,
    link: string,
    caption: string,
    filename?: string
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "document",
      to,
      document: { caption, link, ...(filename && { filename }) },
    });
  }

  public sendImage(
    to: string,
    link: string,
    caption: string
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "image",
      to,
      image: { caption, link },
    });
  }

  public sendLocation(
    to: string,
    location: {
      longitude: string;
      latitude: string;
      name: string;
      address: string;
    }
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "location",
      to,
      location,
    });
  }

  public sendSticker(
    to: string,
    link: string
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "sticker",
      to,
      sticker: { link },
    });
  }

  public sendVideo(
    to: string,
    link: string,
    caption: string
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "video",
      to,
      video: { caption, link },
    });
  }

  public sendReplyButtons(
    to: string,
    payload: Types.ReplyButtons
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "interactive",
      to,
      interactive: {
        ...payload,
        type: "button",
      },
    });
  }

  public sendListMessage(
    to: string,
    payload: Types.ListMessages
  ): Promise<Types.MessageApiResponse> {
    return this.http.post("/messages", {
      recipient_type: "individual",
      type: "interactive",
      to,
      interactive: {
        ...payload,
        type: "list",
      },
    });
  }
}
