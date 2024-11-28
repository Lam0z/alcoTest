<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <el-button type="primary" class="btn">{{ text }}</el-button>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss" as v;
.btn {
    background-color: v.$violet;
    padding: 20px 24px;
    border-radius: 4px;
}
</style>
