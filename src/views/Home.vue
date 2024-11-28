<script setup>
import AppButton from "@/components/AppButton.vue";
import AppLayout from "@/layout/AppLayout.vue";
import { ref, onMounted } from "vue";
import { RecipeService } from "@/services";
import { ROUTES_PATHS } from "@/constants";

const recipes = ref();

const fetchRecipes = async () => {
    try {
        recipes.value = await RecipeService.getRecipesByLetter();
    } catch (error) {
        console.log(error);
    }
};
onMounted(fetchRecipes);

const getRecipePath = (id) => {
    return `${ROUTES_PATHS.RECIPE.split(":")[0]}${id}`;
};
</script>

<template>
    <main>
        <AppLayout>
            <template #title> Рецепты </template>
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
                                <RouterLink
                                    :to="getRecipePath(scope.row.idMeal)"
                                >
                                    <img
                                        :src="scope.row.strMealThumb"
                                        alt="meal image"
                                    />
                                </RouterLink>
                            </template>
                        </el-table-column>
                        <el-table-column prop="strArea" label="Area" />
                        <el-table-column prop="strCategory" label="Category" />
                        <el-table-column label="Tags">
                            <template #default="scope">
                                <template v-if="scope?.row?.strTags">
                                    <el-tag
                                        type="primary"
                                        v-for="(
                                            tag, key
                                        ) in scope.row.strTags.split(',')"
                                        :key="key"
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
    </main>
</template>

<style lang="scss" scoped>
img {
    width: 70px;
    height: 70px;
}
.tag {
    margin: 2px 3px;
}
</style>
