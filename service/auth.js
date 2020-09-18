import jwt from 'jsonwebtoken'

const secret = 'huadong'

export const sign = payload => {
    return jwt.sign(payload, secret, { expiresIn: '24h' })
}

export const verify = token => {
    return jwt.verify(token, secret)
}