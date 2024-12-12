<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ROUTES_PATHS } from "@/constants";
const router = useRouter();
const route = useRoute().path;
const isPathActive = (path) => {
    return route === path;
};
onMounted(isPathActive);
</script>
<template>
    <div class="menu">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt="logo" />
        </div>
        <el-menu :router="true" class="nav el-menu-vertical-demo">
            <el-menu-item
                :index="ROUTES_PATHS.HOME"
                :class="['item', isPathActive(ROUTES_PATHS.HOME) && 'active']"
            >
                <el-icon :size="24"><food /></el-icon>
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
img {
    width: 30px;
}
.logo {
    padding: 0 15px 15px;
    border-bottom: 1px solid v.$border;
}
.menu {
    height: 100vh;
    padding: 20px 5px 0;
    border-right: 1px solid v.$border;
}
.nav {
    border: none;
}
.item {
    color: v.$violet;
    &.active {
        color: v.$pink;
    }
}
</style>
