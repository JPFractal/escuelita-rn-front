const API_BASE_URL = "http://localhost:4001";

export const API_DIRECTORY = {
  LOGIN: { src: `${API_BASE_URL}/auth/login` },
  USERS: {
    one: (username: string) => ({
      src: `${API_BASE_URL}/users/profile/${username}`,
    }),
  },
  TALENTS: { src: `${API_BASE_URL}/talents` },
  METADATA: { 
    register: {
      src: `${API_BASE_URL}/metadata/register`
    }
   }
};
