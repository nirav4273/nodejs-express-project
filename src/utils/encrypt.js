import bcrypt from 'bcrypt'

const salt = process.env.SALT_ROUND ? Number(process.env.SALT_ROUND) : 10

export const encryptInput = (inputString) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(inputString, salt, (err, hash) => {
      if (err) {
        reject(err)
      } else {
        resolve(hash)
      }
    })
  })
}

export const compareInput = (inputString, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(inputString, hash, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
