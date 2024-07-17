import { defineStore } from "pinia";

export const useLangStore = defineStore("langStore", {
    state: () => ({
        langIcon: "uz",
    }),
    actions: {
        changeLang() {
            if (this.langIcon === "uz") {
                this.langIcon = "ru";
            } else if (this.langIcon === "ru") {
                this.langIcon = "en";
            } else {
                this.langIcon = "uz";
            }
        },
    },
});
