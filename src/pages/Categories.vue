<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";

// const recipes = ref();

// const fetchRecipes = async () => {
//     try {
//         recipes.value = await RecipeService.getRecipesByLetter();
//     } catch (error) {}
// };
// onMounted(fetchRecipes);
</script>

<template>
    <AppLayout>
        <template #title>Категории</template>
        <template #controls>
            <AppButton text="Добавить категорию" />
        </template>
        <template #inner>Categories</template>
    </AppLayout>
</template>
