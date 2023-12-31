import 'dotenv/config'
console.log(`${process.env.NODE_ENV.toLocaleUpperCase()} environment`)
export default {
    NODE_ENV: process.env.NODE_ENV,
    PERSISTENCE: process.argv[2] || process.env.PERSISTENCE,
    MONGO_ATLAS: process.env.MONGO_ATLAS,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    EMAIL_TO_RECEIVE_FOR_TEST: process.env.EMAIL_TO_RECEIVE_FOR_TEST,
    EMAIL_TO_SEND: process.env.EMAIL_TO_SEND,
    PASS_NODEMAILER: process.env.PASS_NODEMAILER,
}
