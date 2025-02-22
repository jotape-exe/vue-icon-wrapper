# IconWrapper em `vue`

## 1- Baixe o componente svg que desejar, e adicione as props de `color` e `size`
### Lembre-se de adicionar as props tanto no seu componente `.vue` , quanto no componente svg nativo: `<svg :width="size" :height="size" ></svg>`

Exemplo: 
```vue

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" :stroke="color"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path
            d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
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
```

## 2- Configure uma `composable` seguindo modelo `key:value` para registrar seus icones

```ts
import LucideApple from "@/components/icons/LucideApple.vue";
export function useIcons() {
    const icons = {
        apple: LucideApple,
    };
    return { icons };
}
```
## 3- Crie o seu `wrapper` de icones

```vue
<template>
  <component :is="IconComponent" :size="size" :color="color" />
</template>
<script setup>
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
```

## 4- Agora... é só usar!

```vue
<template>
   <AppIcon name="apple" />
</template>
<script setup>
import AppIcon from "@/components/AppIcon.vue";
</script>
```
---

## Setup do projeto

```sh
pnpm install
```

### Inicie o servidor de dev

```sh
pnpm dev
```

