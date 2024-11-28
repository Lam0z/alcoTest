<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ROUTES_PATHS } from "@/constants";
const router = useRouter();
const route = useRoute();
const isPathActive = (path) => route.path === path;

onMounted(isPathActive);
</script>
<template>
    <div class="menu">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="logo" />
        </div>
        <el-menu :router="true" class="nav">
            <el-menu-item
                :index="ROUTES_PATHS.HOME"
                :class="['item', isPathActive(ROUTES_PATHS.HOME) && 'active']"
            >
                <el-icon :size="24"><Food /></el-icon>
            </el-menu-item>
            <el-menu-item
                :index="ROUTES_PATHS.CATEGORIES"
                :class="[
                    'item',
                    isPathActive(ROUTES_PATHS.CATEGORIES) && 'active',
                ]"
            >
                <el-icon :size="24"><Dish /></el-icon>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as v;
.menu {
    height: 100vh;
    padding: 20px 5px;
    border-right: 1px solid v.$border;
}
.nav {
    border: none;
}
.logo {
    padding: 0 15px 15px;
    border-bottom: 1px solid v.$border;
    img {
        width: 100%;
        max-width: 30px;
    }
}
.item {
    color: v.$violet;
    &.active {
        color: v.$pink;
    }
}
</style>
