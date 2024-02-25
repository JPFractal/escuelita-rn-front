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
