<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import AppLayout from "../layouts/AppLayout.vue";
import AppButton from "../components/AppButton.vue";
</script>

<template>
    <AppLayout>
        <template #title> Рецепты </template>
        <template #controls> <AppButton /> </template>
    </AppLayout>
</template>
