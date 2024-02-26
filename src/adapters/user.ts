import User from "@/types/User";

export default function adapterUser(user: any): User {
  return {
    id: user.userId,
    username: user.username,
    photo: user.photo,
    name: user.firstName + user.lastName,
    role: user.roles[0],
  };
}
