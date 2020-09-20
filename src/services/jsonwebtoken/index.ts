import jwt from 'jsonwebtoken';

export default async function setJWT(userAuthenticate: any) {
  try {
    // @ts-ignore
    return jwt.sign({ id: userAuthenticate.id }, process.env.JWT_secret, {
      expiresIn: process.env.JWT_expiresIn,
    });
  } catch (error) {
    return {
      code: 10,
      message: error.message,
    };
  }
}

export async function verifyJWT(token: any) {
  try {
    // @ts-ignore
    return jwt.verify(token, process.env.JWT_secret);
  } catch (error) {
    return {
      code: 10,
      message: error.message,
    };
  }
}
