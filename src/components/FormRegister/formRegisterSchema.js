import { z } from "zod";

const formRegisterSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório."),
    email:  z.string().email("Forneça um e-mail válido").min(1, "Este campo é obrigatório"),
    password: z
        .string()
        .min(8, "É necessário pelomenos 8 caracteres")
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/, "Senha inválida"),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório.")
})
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem.",
        path: ["confirmPassword"],
    })
    .refine(({ name, password }) => !password.includes(name), {
        message: "A senha não pode conter seu nome.",
        path: ["password"],
    })

    export { formRegisterSchema };