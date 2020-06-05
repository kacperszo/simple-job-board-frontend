import {userActionsType} from "../actions/userActions";

export default function (state = "", action) {
    switch (action.type) {
        case userActionsType.ADD_TOKEN:
            return {
                token: action.token
            };
        case userActionsType.REMOVE_TOKEN: {
            return {
                token: null
            };
        }
        default:
            return state
    }
}