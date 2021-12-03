export interface AppState {
    title: String;
    isNetwork: boolean;
    safeZone: Boolean;
    serviceResponse: any;
    serviceOtp:any;
    validateOtp:any;
    register:any;
    sessionId:String;
    token:string;
}

export const initialState: AppState = {
    title: "Hola Mundo",
    isNetwork: false,
    safeZone: false,
    serviceResponse: {},
    serviceOtp:{},
    validateOtp:{},
    register:{},
    sessionId:"",
    token:""
};
