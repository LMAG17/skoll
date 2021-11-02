
export interface AppState {
    title: String,
    isNetwork: boolean,
    safeZone: Boolean,
}

export const initialState: AppState = {
    title: "Hola Mundo",
    isNetwork: false,
    safeZone: false,
};
