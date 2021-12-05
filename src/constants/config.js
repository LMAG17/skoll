export const config = {
    baseUrl: 'http://54.219.38.254:8090/',
    apis: {
        user: 'user/',
        oauth: 'oauth/',
        auth: 'auth/',
        security: 'security/',
        register: 'register/',
        external: 'external/',
    },
    endpoints: {
        login: 'login',
        register: 'register',
        confirmation: 'confirmation',
        facebook: 'facebook',
    },
    otp: {
        generate: 'generate/',
        validate: 'validate/',
        register: 'otp-register',
    }
}

export const URLS = {
    LOGIN: config.baseUrl + config.apis.oauth + config.endpoints.login,
    FACEBOOK_LOGIN: config.baseUrl + config.apis.external + config.apis.auth + config.endpoints.facebook,
    REGISTER: config.baseUrl + config.apis.user + config.endpoints.register,
    GENERATE_OTP_REGISTRY: config.baseUrl + config.apis.security + config.otp.generate + config.otp.register,
    VALIDATE_OTP_REGISTRY: config.baseUrl + config.apis.security + config.otp.validate + config.otp.register,
    FINISH_REGISTRATION: config.baseUrl + config.apis.user + config.apis.register + config.endpoints.confirmation,
    USER_DATA: config.baseUrl + config.apis.user,
}