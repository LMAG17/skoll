export interface User{
    firstName:string,
    lastName:string,
    email:string,
}
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
    user:User;
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
    token:"",
    user:{
        firstName:"",
        lastName:"",
        email:"", 
    }
};
