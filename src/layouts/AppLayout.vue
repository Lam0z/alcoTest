<script setup>
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
    <div class="root">
        <div class="menuInner">
            <AppMenu></AppMenu>
        </div>
        <div class="main">
            <header class="header">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="controls">
                    <slot name="controls"></slot>
                </div>
            </header>
            <div class="inner">
                <slot name="inner"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as v;
@use "@/assets/styles/index.scss";

.root {
    display: flex;
}
.menuInner {
    width: 70px;
}
.main {
    padding: 20px 16px;
    flex: 1;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title {
    font-size: 28px;
    font-weight: 700;
    color: v.$violet;
}
</style>
