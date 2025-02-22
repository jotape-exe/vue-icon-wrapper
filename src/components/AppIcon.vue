<template>
    <component :is="IconComponent" :size="size" :color="color" />
  </template>
  
  <script setup >
  import { defineProps } from "vue";
  import { useIcons } from "@/composables/useIcons";
  
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    size: {
      required: false,
      default: 24,
    },
  });
  
  const { icons } = useIcons();
  
  const IconComponent = icons[props.name] || null;
  </script>
  