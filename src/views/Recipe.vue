<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layout/AppLayout.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { RecipeService } from "@/services";

const route = useRoute();
const recipeId = route?.params.id;
const recipe = ref(RecipeService.getEmptyRecipe());
const recipeUpdated = ref(RecipeService.getEmptyRecipe());
const isCreatingMode = ref(true);

const fetchRecipe = async () => {
    try {
        const data = (recipe.value = await RecipeService.getRecipesById(
            recipeId
        ));
        recipeUpdated.value = data;
        recipe.value = data;
        isCreatingMode.value = false;
    } catch (error) {
        console.log(error);
    }
};
onMounted(() => {
    if (parseInt(recipeId)) {
        fetchRecipe();
    }
});
</script>

<template>
    <main>
        <AppLayout>
            <template #title
                >{{ isCreatingMode ? "Новый рецепт" : recipeUpdated?.strMeal }}
            </template>
            <template #controls>
                <AppButton text="Сохранить" />
            </template>

            <template #inner> {{ recipeUpdated }} </template>
        </AppLayout>
    </main>
</template>
