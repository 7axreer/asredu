<script setup>
    import { defineProps } from "vue";

    defineProps({
        langIcon: String,
        changeLang: Function,
        required: true,
    });
</script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__content">
                <div class="nav__content-logo">
                    <img src="@/assets/img/logo.svg" alt="" />
                    <span>ASR EDU</span>
                </div>

                <ul class="nav__content-list">
                    <li class="nav__content-link">
                        <a href="#">Biz haqimizda</a>
                    </li>
                    <li class="nav__content-link">
                        <a href="#">Jamoa</a>
                    </li>
                    <li class="nav__content-link">
                        <a href="#">Narxlar</a>
                    </li>
                    <li class="nav__content-link">
                        <a href="#">Natijarlar</a>
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
