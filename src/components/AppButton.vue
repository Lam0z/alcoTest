<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <el-button class="btn" type="primary">{{ text }}</el-button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as v;

.btn {
    padding: 20px 24px;
    font-size: 17px;
    border-radius: 4px;
    background-color: v.$violet;
}
</style>
