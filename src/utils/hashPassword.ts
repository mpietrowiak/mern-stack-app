import bcrypt from "bcrypt-nodejs";

export default function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { reject(err); }
      bcrypt.hash(password, salt, null, (err: Error, hash: any) => {
        if (err) { reject(err); }
        resolve(hash);
      });
    });
  });
}