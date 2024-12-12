<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import AppButton from "@/components/AppButton.vue";
import { ROUTES_PATHS } from "@/constants";
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";

const recipes = ref();

const fetchRecipes = async () => {
    try {
        recipes.value = await RecipeService.getRecipesByLetter();
    } catch (error) {}
};

const getRecipePath = (id) => {
    return `${ROUTES_PATHS.RECIPE.split(":")[0]}${id}`;
};

onMounted(fetchRecipes);
</script>

<template>
    <AppLayout>
        <template #title>Рецепты</template>
        <template #controls>
            <RouterLink :to="getRecipePath('new')">
                <AppButton text="Добавить рецепт"
            /></RouterLink>
        </template>
        <template #inner>
            <div class="wrapper">
                <el-table :data="recipes" style="width: 100%">
                    <el-table-column prop="idMeal" label="Id" />
                    <el-table-column label="Image">
                        <template #default="scope">
                            <RouterLink :to="getRecipePath(scope.row.idMeal)">
                                <img
                                    :src="scope.row.strMealThumb"
                                    alt="image"
                                    class="image"
                                />
                            </RouterLink>
                        </template>
                    </el-table-column>
                    <el-table-column prop="strMeal" label="Name" />
                    <el-table-column prop="strArea" label="Area" />
                    <el-table-column prop="strCategory" label="Category" />
                    <el-table-column prop="strTags" label="Tags">
                        <template #default="scope">
                            <template v-if="scope?.row?.strTags">
                                <el-tag
                                    v-for="(
                                        tag, key
                                    ) in scope?.row?.strTags.split(',')"
                                    :key="key"
                                    type="primary"
                                    class="tag"
                                    >{{ tag }}</el-tag
                                >
                            </template>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </template>
    </AppLayout>
</template>

<style lang="scss" scoped>
.image {
    width: 70px;
    height: 70px;
}
.tag {
    margin: 2px 3px;
}
</style>
