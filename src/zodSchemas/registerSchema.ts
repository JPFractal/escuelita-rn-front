import z from "zod";

export const regiterTalentDefaultValues = {
  firstName: "",
  paternalSurname: "",
  maternalSurname: "",
  // imageUrl: "",
  // description: "",
  // talentProfileId: 0,
  // currencyTypeId: 0,
  initialAmount: "",
  finalAmount: "",
  // cellphone: "",
  linkedinUrl: "",
  githubUrl: "",
  // countryId: 0,
  // cityId: 0,
};

export interface RegisterTalent {
  firstName: string;
  paternalSurname: string;
  maternalSurname: string;
  imageUrl: string;
  description: string;
  talentProfileId: number;
  currencyTypeId: number;
  initialAmount: number;
  finalAmount: number;
  cellphone: string;
  linkedinUrl: string;
  githubUrl: string;
  countryId: number;
  cityId: number;
}

export const RegisterTalentSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "El nombre es requerido" })
    .max(100),
  paternalSurname: z
    .string()
    .min(2, { message: "El apellido paterno es requerido" })
    .max(100),
  maternalSurname: z
    .string()
    .min(2, { message: "El apellido materno es requerido" })
    .max(100),
  //   imageUrl: z
  //     .string()
  //     .nonempty({ message: "Image file is required" })
  //     .refine(
  //       (value) =>
  //         value.match(
  //           /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/
  //         ),
  //       "Image URL must be base64"
  //     ),
  // description: z
  //   .string()
  //   .nonempty({ message: "Description is required" })
  //   .max(100),
  // talentProfileId: z.number().int().nonnegative(),
  // currencyTypeId: z.number().int().nonnegative(),
  initialAmount: z
    .string()
    .refine((value) => !isNaN(parseInt(value, 10)), {
      message: "Este campo es obligatorio",
    })
    .transform((value) => parseInt(value, 10))
    .refine((value) => value >= 0, {
      message: "El valor no puede ser negativo",
    }),
  finalAmount: z
    .string()
    .refine((value) => !isNaN(parseInt(value, 10)), {
      message: "Este campo es obligatorio",
    })
    .transform((value) => parseInt(value, 10))
    .refine((value) => value >= 0, {
      message: "El valor no puede ser negativo",
    }),
  // cellphone: z
  //   .string()
  //   .min(1, { message: "Cellphone is required" })
  //   .max(100)
  //   .optional(),
  linkedinUrl: z
    .string()
    .min(1, { message: "Este campo es obligatorio" })
    .max(100, {
      message: "El campo no puede tener más de 100 caracteres",
    })
    .url({ message: "Por favor, ingresa una URL válida" }),
  githubUrl: z
    .string()
    .min(1, { message: "Este campo es obligatorio" })
    .max(100, {
      message: "El campo no puede tener más de 100 caracteres",
    })
    .url({ message: "Por favor, ingresa una URL válida" }),
  countryId: z.number({
    invalid_type_error: "El país es obligatorio"
  }).int().nonnegative(),
  cityId: z.number({
      invalid_type_error: "La ciudad es obligatoria"
    }).int().nonnegative()
    .refine((value) => value >= 0, {
      message: "La ciudad es obligatoria",
    }),
});

export type Talent = z.infer<typeof RegisterTalentSchema>;
