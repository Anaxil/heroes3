import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

}
