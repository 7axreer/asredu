import apiTelegram from "@/helpers/telegramApi";
import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({
        formData: {
            name: "",
            number: "",
        },
    }),
    actions: {
        async onSubmit() {
            let phoneNumber = String(this.formData.number).trim();

            if (!phoneNumber.startsWith("+998")) {
                phoneNumber = "+998" + phoneNumber;
            }

            try {
                const response = await apiTelegram.sendMessage(this.formData.name, phoneNumber);

                if (response.ok) {
                    alert("Message sent successfully!");
                    this.formData.name = "";
                    this.formData.number = "";
                } else {
                    alert("Error sending message. Please try again later.");
                }
            } catch (error) {
                console.error("Error sending message:", error);
                alert("Error sending message. Please try again later.");
            }
        },

        liveCheckOut() {
            this.formData.number = String(this.formData.number).replace(/[^\d+]/g, "");
            const regEX = /^\+998[0-9]{0,9}$/;
            if (!regEX.test(this.formData.number)) {    
                this.formData.number = this.formData.number.slice(0, 9);
            }
        },
    },
});
