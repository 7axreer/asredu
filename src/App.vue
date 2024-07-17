<script setup>
    import Navbar from "@/components/Navbar/Navbar.vue";
    import Home from "@/views/Home/Home.vue";
    import About from "@/views/About/About.vue";
    import { useLangStore } from "@/stores/langStore";

    const langStore = useLangStore();

    function changeLang() {
        langStore.changeLang();
    }
</script>

<template>
    <Navbar />
    <Home />
    <About />
</template>
