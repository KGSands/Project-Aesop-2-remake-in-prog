import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishGB from "./i18n/en-GB.json";

const resources = { englishGB: englishGB};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "englishGB", // Would need state saved to server / cache for reload
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;