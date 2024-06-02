<template>
    <div :class="`group absolute ${positionClass} cursor-pointer bg-brand-cream-dark rounded-2.5xl flex items-center hover:gap-3 justify-center max-w-fit w-full h-9 px-2`">
        <div class="w-5 shrink-0">
            <img :src="`/icons/${img}`" alt="">
        </div>
        <div class="font-medium text-brand-brown overflow-hidden text-sm transition-all ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] whitespace-nowrap">
            <span class="invisible group-hover:visible">
                Cocoon Upper Deluxe
            </span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    img: String,
    positionClass: String,
})
</script>