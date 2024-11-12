<script setup></script>

<template>
    <div class="menu">
        <div class="logo">
            <img src="@/assets/img/heart-solid.svg" alt="hear" />
        </div>
        <el-menu class="nav">
            <el-menu-item index="1">
                <el-icon :size="24"><Food /></el-icon>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon :size="24"><Dish /></el-icon>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss" as v;
.menu {
    height: 100vh;
    border-right: 1px solid v.$border;
    padding: 20px 5px 0;
    img {
        width: 30px;
        height: 30px;
    }
    .nav {
        border: none;
    }
    .logo {
        padding: 0 15px 15px;
        border-bottom: 1px solid v.$border;
    }
}
</style>
