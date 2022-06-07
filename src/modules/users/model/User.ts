/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id?: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  admin: boolean;

  construct(): void {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.admin = false;
  }
}

export { User };
