import LucideApple from "@/components/icons/LucideApple.vue";
import LucideDoubleCheck from "@/components/icons/LucideDoubleCheck.vue";
import LucideLike from "@/components/icons/LucideLike.vue";
import PhAndroid from "@/components/icons/PhAndroid.vue";
import PhJsFile from "@/components/icons/PhJsFile.vue";
import PhVueFIle from "@/components/icons/PhVueFIle.vue";

export function useIcons() {
    const icons = {
        apple: LucideApple,
        "double-check": LucideDoubleCheck,
        like: LucideLike,
        android: PhAndroid,
        js: PhJsFile,
        vue: PhVueFIle,
    };

    return { icons };
}
