import User from "./User";

export default interface Auth {
  token: string;
  type: string;
  user: User;
}
