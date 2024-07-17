<script setup>
    import { computed } from "vue";
    import { useLangStore } from "@/stores/langStore";
    import langData from "@/constants/lang";

    const langStore = useLangStore();

    const langIcon = computed(() => langStore.langIcon);

    function changeLang() {
        langStore.changeLang();
    }
</script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">
                <div class="nav__content-logo">
                    <span>ASR EDU</span>
                </div>

                <ul class="nav__content-list">
                    <li class="nav__content-link">
                        <a href="#about">
                            {{ langData.about[langIcon] }}
                        </a>
                    </li>
                    <li class="nav__content-link">
                        <a href="#">
                            {{ langData.team[langIcon] }}
                        </a>
                    </li>
                    <li class="nav__content-link">
                        <a href="#">
                            {{ langData.price[langIcon] }}
                        </a>
                    </li>
                    <li class="nav__content-link">
                        <a href="#">
                            {{ langData.results[langIcon] }}
                        </a>
                    </li>
                </ul>

                <ul class="nav__content-menu">
                    <button @click="changeLang">
                        <img src="@/assets/img/uz.svg" alt="Uzbek" v-if="langIcon === 'uz'" />
                        <img src="@/assets/img/ru.svg" alt="Russian" v-else-if="langIcon === 'ru'" />
                        <img src="@/assets/img/us.svg" alt="English" v-else />
                    </button>
                    <li>
                        <a href="tel:+998991228841">
                            <i class="fas fa-phone-alt"></i>
                            93 173 31 77
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
