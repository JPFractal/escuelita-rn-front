import { API_DIRECTORY } from "@/constraints/Api-Directory";

export const REQ_USER = (username: string, token: string) =>
  fetch(API_DIRECTORY.USERS.one(username).src, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
