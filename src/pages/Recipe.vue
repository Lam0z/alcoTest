<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";
import { useRoute } from "vue-router";
const route = useRoute();
const recipeId = route?.params.id;
const recipe = ref(RecipeService.getEmptyRecipe());
const recipeUpdated = ref(RecipeService.getEmptyRecipe());
const isCreatingMode = ref(true);

const fetchRecipes = async (id) => {
    try {
        const data = await RecipeService.getRecipesById(recipeId);
        recipe.value = data;
        recipeUpdated.value = data;
        isCreatingMode.value = false;
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    if (parseInt(recipeId)) {
        fetchRecipes();
    }
});

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
        <template #title>{{
            isCreatingMode ? "Новый рецепт" : recipeUpdated.strMeal
        }}</template>
        <template #controls>
            <AppButton text="Сохранить" />
        </template>
        <template #inner>{{ recipeUpdated }}</template>
    </AppLayout>
</template>
