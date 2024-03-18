const z = require("zod");

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be atleast 3 character!" })
    .max(64, { message: "Name should not be more than 64 character!" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number should be atleast 10 numbers!" })
    .max(16, { message: "Phone number should not be more than 16 numbers!" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email!" })
    .min(3, { message: "email should be atleast 3 character!" })
    .max(64, { message: "email should not be more than 64 character!" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password should be atleast 8 character!" })
    .max(1024, { message: "Password should not be more than 1024 character!" }),
});
const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email!" })
    .min(3, { message: "email should be atleast 3 character!" })
    .max(64, { message: "email should not be more than 64 character!" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password should be atleast 8 character!" })
    .max(1024, { message: "Password should not be more than 1024 character!" }),
});

module.exports = { registerSchema, loginSchema };
