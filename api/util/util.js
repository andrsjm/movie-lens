import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds)
}

export const getHashedPassword = async (password) => {
    await hashPassword(password).then((hashedPassword) => {
        password = hashedPassword
    }).catch((err) => {
        console.log(err);
        password = ''
    })

    return await password
}

export const comparedPassword = async (password, hashedPassword) => {
    let valid
    await bcrypt.compare(password, hashedPassword).then((isMatch) => {
        valid = isMatch
    }).catch((err) => {
        console.log(err);
        return false
    })

    return await valid
}

export const getJWTKey = (data) => {
    const token = jwt.sign(data, process.env.JWT_KEY);

    return token
}

export const removeEmptyProperties = (obj) => {
    for (const key in obj) {
      if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  }