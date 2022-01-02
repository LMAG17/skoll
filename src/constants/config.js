export const config = {
    baseUrl: 'http://54.219.38.254:8090/',
    baseParams:'http://54.219.38.254:8096/',
    apis: {
        user: 'user/',
        oauth: 'oauth/',
        auth: 'auth/',
        security: 'security/',
        register: 'register/',
        external: 'external/',
        merchantService: "merchantService",
        merchantCategory: "merchantCategory",
        advertising: "advertising",
        event: "event",
        departaments: "departaments/",
        merchantFilter: "merchantFilter",
        services: "services",
        coordinates: "coordinates",
        parameter:"parameter/"
    },
    endpoints: {
        login: 'login',
        register: 'register',
        confirmation: 'confirmation',
        facebook: 'facebook',
        enableOrderByName: 'enableOrderByName',
        resources: "resources/",
        category: "category",
        general:"general"
    },
    otp: {
        generate: 'generate/',
        validate: 'validate/',
        register: 'otp-register',
    },
    query: {
        city: 'cityId=',
        merchantCategory: 'merchantCategoryId=',
        page: 'page=',
        size: 'size=',
        serviceIds: 'serviceIds=',
        lat: "lat=",
        long: "long=",
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
    MERCHANT_SERVICE: config.baseUrl + config.apis.merchantService,
    MERCHANT_SERVICE_BY_NAME: config.baseUrl + config.apis.merchantService + config.endpoints.enableOrderByName,
    MERCHANT_CATEGORY: config.baseUrl + config.apis.merchantCategory,
    ADVERTISING: config.baseUrl + config.apis.advertising,
    EVENT: config.baseUrl + config.apis.event,
    DEPARTAMENTS: config.baseUrl + config.apis.departaments + config.endpoints.resources,
    PARAMETERS:config.baseParams+config.apis.parameter+config.endpoints.general
}