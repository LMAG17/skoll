export interface User {
    firstName: string,
    lastName: string,
    email: string,
}
export interface AppState {
    title: String;
    isNetwork: boolean;
    safeZone: Boolean;
    serviceResponse: any;
    serviceOtp: any;
    validateOtp: any;
    register: any;
    sessionId: String;
    token: string;
    user: User;
    parameters: Object;
}

export const initialState: AppState = {
    parameters: {},
    title: "Hola Mundo",
    isNetwork: false,
    safeZone: false,
    serviceResponse: {},
    serviceOtp: {},
    validateOtp: {},
    register: {},
    sessionId: "",
    token: "",
    user: {
        firstName: "",
        lastName: "",
        email: "",
    }
};
