// src/helpers/api/telegramApi.js
import telegramClient from './telegramClient';

const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const apiTelegram = {
    sendMessage(name, number) {
        const telegramMessage = [
            "Сиз учун янги хабар ⤵️",
            ``,
            `👤 Name: ${name}`,
            `☎️ Number: ${number}`,
        ].join("\n");

        return telegramClient.post(`/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: telegramMessage,
        });
    },
};

export default apiTelegram;
