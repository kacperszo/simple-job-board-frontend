import {default_lang} from "./config";

export const local = {
    "en-US": {
        expireIn: "Expire in",
        days: "days",
        readMore: "Read more",
        show: "Show",
        hide: "Hide",
        remove: "Remove",
        edit: "Edit",
        expirationDate: "Expiration date",
        apply: "Apply",
        title: "Title",
        content: "Content",
        hidden: "Hidden",
        save: "Save",
        username: "username",
        password: "password",
        login: "login",
        invalidUsernameOrPassword: "Invalid username or password"
    },
    "pl": {
        expireIn: "Wygaśnie za",
        days: "dni",
        readMore: "Czytaj więcej",
        show: "Pokaż",
        hide: "Ukryj",
        remove: "Usuń",
        edit: "Edytuj",
        expirationDate: "Data wygaśnięcia",
        apply: "Aplikuj",
        title: "Tytuł",
        content: "Opis",
        hidden: "Ukryte",
        save: "Zapisz",
        username: "Nazwa użytkownika",
        password: "Hasło",
        login: "zaloguj",
        invalidUsernameOrPassword: "Błędny login lub hasło"
    }
}

export function getLocal() {
    const lang = navigator.language;
    if (lang in local) {
        return local[lang]
    } else {
        return local[default_lang]
    }
}