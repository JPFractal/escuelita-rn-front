import User from "./User";

export default interface Feedback {
  id: number | string;
  author: User;
  score: number;
  comment: string;
}
