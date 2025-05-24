import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.ENCRYPTION_KEY!, "hex");
const iv = crypto.randomBytes(16);

export const encryptPassword = (password: string) => {
  if (typeof password !== "string") {
    throw new Error("Invalid password type");
  }

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(password, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    encryptedPassword: encrypted,
    iv: iv.toString("hex"),
  };
};
