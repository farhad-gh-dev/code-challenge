export interface ContactChannel {
  id: string;
  name: string;
  link: string;
}

export interface UserSettings {
  contactChannels: ContactChannel[];
}
