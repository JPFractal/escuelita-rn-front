export const FIELD_LIST = {
  id: "",
  organization: "",
  position: "",
  grade: "",
  start_date: "",
  end_date: "",
};

export const VALIDATORS = {
  organization: {
    required: true,
  },
  position: {
    required: true,
  },
  grade: { required: true },
  start_date: {
    required: true,
  },
  end_date: {},
};

export function getMessageErrors(
  errors: any,
  field: string
): { helperText: string; error: boolean } {
  const messages: { [key: string]: string } = {
    required: "Este campo es obligatorio",
  };

  return {
    helperText: messages[errors[field]?.type],
    error: !!errors[field],
  };
}
