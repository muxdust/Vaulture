import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.ENCRYPTION_KEY!, "hex");

export const decryptPassword = (encryptedPassword: string, ivHex: string) => {
  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedPassword, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
