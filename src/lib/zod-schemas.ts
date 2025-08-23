import z from "zod";

export const signinFormSchema = z.object({
    email: z.email(),
    password: z.string().min(1, { message: "Password is required" }).min(8, { message: "Password must be at least 8 characters long!"})
})

export const signupFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).min(3, { message: "Name must be at least 3 character" }),
    email: z.email(),
    password: z.string().min(1, { message: "Password is required" }).min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export const agentsInsertSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).min(3, { message: "Name must be at least 3 character" }),
    instructions: z.string().min(1, { message: "Instructions are required" }),
})