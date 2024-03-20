import z from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png"];


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
  id: number;
  firstName: string;
  paternalSurname: string;
  maternalSurname: string;
  imageUrl: any;
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
  imageUrl: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `El tamaño maximo de las imagenes es de ${MAX_FILE_SIZE/1000000}MB.`)
    .refine((files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
    'Solo los formatos ".jpg", ".jpeg" y ".png" son permitidos')
    .transform(files => files?.[0]) // Send only the first file
    .optional(),
  description: z
    .string()
    .min(1, { message: "La descripción es requerida" })
    .max(100),
  talentProfileId: z
    .string()
    .min(1, {
      message: "Este campo es obligatorio",
    })
    .transform((value) => parseInt(value, 10)),
  currencyTypeId: z
    .number({
      required_error: "Este campo es obligatorio"
    })
    .int()
    .nonnegative(),
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
  cellphone: z
    .string()
    .min(9, { message: "El número celular debe tener por lo menos 9 números" })
    .max(12, { message: "El número celular no puede tener más de 12 números" }),
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
  countryId: z
    .string()
    .transform((value) => parseInt(value, 10)),
  cityId: z
    .string({
      invalid_type_error: "Es necesario seleccionar un país para seleccionar la ciudad"
    })
    .transform((value) => parseInt(value, 10)),
});

export type Talent = z.infer<typeof RegisterTalentSchema>;
