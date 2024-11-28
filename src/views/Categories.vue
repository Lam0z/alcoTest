<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layout/AppLayout.vue";
import { ref, onMounted } from "vue";
</script>

<template>
    <main>
        <AppLayout>
            <template #title> Категории </template>
            <template #controls>
                <AppButton text="Добавить категорию" />
            </template>
            <template #inner> </template>
        </AppLayout>
    </main>
</template>
