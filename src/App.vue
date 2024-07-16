<script setup>
    import { ref } from "vue";
    import Navbar from "@/components/Navbar/Navbar.vue";
    import Home from "./views/Home/Home.vue";
    import About from "./views/About/About.vue";

    const langIcon = ref("uz");
    function changeLang() {
        if (langIcon.value === "uz") {
            langIcon.value = "ru";
        } else if (langIcon.value === "ru") {
            langIcon.value = "us";
        } else {
            langIcon.value = "uz";
        }
    }
</script>

<template>
    <Navbar :langIcon="langIcon" :changeLang="changeLang" />
    <Home />
    <About/>
</template>
