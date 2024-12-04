import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { CommonService } from "@/services";

export const useRootStore = defineStore("store", () => {
    const areas = ref(null);
    const categories = ref(null);
    const ingredients = ref(null);

    async function getAreas() {
        const data = await CommonService.getAreas();
        areas.value = data;
    }

    return { areas, categories, ingredients, getAreas };
});
