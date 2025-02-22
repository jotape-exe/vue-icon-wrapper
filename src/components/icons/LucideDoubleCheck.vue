<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" :stroke="color"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check">
        <path d="M18 6 7 17l-5-5" />
        <path d="m22 10-7.5 7.5L13 16" />
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
    color: {
        type: String,
        default: '#fff'
    },
    size: {
        default: 24,
        required: false
    }
});
</script>