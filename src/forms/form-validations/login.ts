export interface FIELD_TYPES_LOGIN {
  username: string;
  password: string;
}

export const FIELD_LIST_LOGIN = {
  username: "",
  password: "",
};

export const VALIDATORS_LOGIN = {
  username: {
    required: true,
  },
  password: {
    required: true,
  },
};
