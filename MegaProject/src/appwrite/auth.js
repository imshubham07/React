import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAcount({ email, password, name }) {
    try {
      const userAcount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAcount) {
        // call another method
        return this.logIn({ email, password });
      } else {
        return userAcount;
      }
    } catch (error) {
        console.log("Appwrite Service :: createAccount :: error", error);
    }
  }

  async logIn({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
        console.log("Appwrite Service :: logIn :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
