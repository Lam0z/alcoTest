<script setup>
import { onMounted } from "vue";
import { useRootStore } from "./stores/root";

const store = useRootStore();

onMounted(() => {
    store.getAreas();
});
</script>

<template>
    <RouterView />
</template>

<style scoped lang="scss">
@use "./assets/styles/index.scss";
</style>
