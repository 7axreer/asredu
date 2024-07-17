<script setup>
    import { computed } from "vue";
    import { useFormStore } from "@/stores/formStore";
    import { useLangStore } from "@/stores/langStore";
    import langData from "@/constants/lang";

    const formStore = useFormStore();

    const sendForm = () => {
        formStore.onSubmit();
    };

    const langStore = useLangStore();
    const langIcon = computed(() => langStore.langIcon);
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__content-left">
                    <h1>{{ langData.homeTitle[langIcon] }}</h1>
                    <div class="header__content-left-text">
                        <p>
                            {{ langData.homeTextFirst[langIcon] }}
                        </p>
                        <p>
                            {{ langData.homeTextSecond[langIcon] }}
                        </p>
                        <p>
                             {{ langData.homeTextThird[langIcon] }}
                        </p>
                    </div>
                    <p class="header__content-left-lastText">Biz bilan yorqin Kelajak...</p>
                </div>

                <div class="header__content-right">
                    <h2>{{ langData.freeCons[langIcon] }}</h2>
                    <p>
                        {{ langData.unAnswered[langIcon] }}
                    </p>
                    <form @submit.prevent="sendForm">
                        <input type="text" :placeholder="langData.placeholder[langIcon]" v-model="formStore.formData.name" />
                        <div>
                            <input @input="formStore.liveCheckOut" type="number" placeholder="93-173-31-77" v-model="formStore.formData.number" />
                            <p>+998</p>
                        </div>
                        <span> {{ langData.warning[langIcon] }}</span>
                        <button type="submit">
                            {{ langData.sendButton[langIcon] }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </header>
</template>
