export const userActionsType = {
    ADD_TOKEN: "ADD_TOKEN",
    REMOVE_TOKEN: "REMOVE_TOKEN"
}

export function addToken(token) {
    return {
        type: userActionsType.ADD_TOKEN,
        token
    }
}

export function removeToken() {
    return {
        type: userActionsType.REMOVE_TOKEN
    }
}