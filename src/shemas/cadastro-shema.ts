import { z } from "zod";

export const cadastroSchema = z.object({
    nomeCompleto: z
        .string({ required_error: "O nome completo é obrigatório" })
        .min(3, "O nome deve ter pelo menos 3 caracteres"),

    idade: z
        .number({ required_error: "A idade é obrigatória" })
        .int("A idade deve ser um número inteiro")
        .min(1, "Idade mínima é 1"),

    formacao: z
        .string({ required_error: "A formação é obrigatória" })
        .min(2, "A formação deve ter pelo menos 2 caracteres"),

    profissao: z
        .string()
        .optional(),

    areasInteresse: z
        .string({ required_error: "As áreas de interesse são obrigatórias" })
        .min(2, "Descreva pelo menos uma área de interesse"),

    cep: z
        .string({ required_error: "O CEP é obrigatório" })
        .regex(/^\d{5}-?\d{3}$/, "CEP inválido"),

    email: z
        .string({ required_error: "O email é obrigatório" })
        .email("Email inválido"),

    telefone: z
        .string({ required_error: "O telefone é obrigatório" })
        .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido"),

    expectativaHub: z
        .string()
        .optional(),
});

export type CadastroFormData = z.infer<typeof cadastroSchema>;
