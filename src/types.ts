export interface ClientConfig {
  APP_ID: string;
  APP_SECRET: string;
  CHANNEL_ID: string;
}

export interface ContactResponse {
  wa_id: string;
  input: string;
}

export interface MessageIdResponse {
  id: string;
}

export interface MetaResponse {
  api_status: string;
  version: string;
}

export interface MessageApiResponse {
  contacts: ContactResponse[];
  messages: MessageIdResponse[];
  meta: MetaResponse;
}

export interface Text {
  text: string;
}

export interface Document {
  link: string;
  filename?: string;
}

export interface Video {
  link: string;
}

export interface Image {
  link: string;
}

export interface HeaderText {
  type: "text";
  text: string;
}

export interface HeaderDocument {
  type: "document";
  document: Document;
}

export interface HeaderVideo {
  type: "video";
  video: Video;
}

export interface HeaderImage {
  type: "image";
  image: Image;
}

export interface Button {
  type: "reply";
  reply: {
    id: string;
    title: string;
  };
}

export interface ReplyButtons {
  header?: HeaderText | HeaderDocument | HeaderImage | HeaderVideo;
  body: Text;
  footer?: Text;
  action: {
    buttons: Button[];
  };
}

export interface ListRow {
  id: string;
  title: string;
  description: string;
}

export interface ListSection {
  title: string;
  rows: ListRow[];
}

export interface ListMessages {
  header?: HeaderText;
  body: Text;
  footer?: Text;
  action: {
    button: string;
    sections: ListSection[];
  };
}
