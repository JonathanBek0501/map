<template>
    <div @click="toggleModal" :class="`group absolute ${positionClass} cursor-pointer bg-brand-cream-dark rounded-2.5xl flex items-center hover:gap-3 justify-center max-w-fit w-full hover:z-10 h-9 px-2`">
        <div class="w-5 shrink-0">
            <img :src="`/icons/${img}`" alt="">
        </div>
        <div class="font-medium text-brand-brown overflow-hidden text-sm transition-all ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] whitespace-nowrap">
            <span class="invisible group-hover:visible">
                Cocoon Upper Deluxe
            </span>
        </div>
    </div>

    <div v-if="modalOpen" @click="toggleModal" class="fixed inset-0 flex items-center justify-center z-20">
        <div @click.stop class="flex max-w-sm sm:max-w-fit md:max-w-[720px] shadow-md mx-5">
            <div class="shrink-0">
                <div class="hidden sm:block max-w-[240px] md:max-w-xs w-full h-full">
                    <img src="/modal-image.jpeg" alt="img" class="w-full h-full object-cover">
                </div>
            </div>

            <div class="relative bg-brand-cream-dark py-10 md:py-14 px-7 md:pr-9 md:pl-12">
                <button type="button" @click="toggleModal" class="absolute top-4 right-4 text-brand-brown">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                <div>
                    <span class="text-sm block pb-3">
                        Accomodation
                    </span>

                    <h2 class="text-xl md:text-2xl md:leading-[30px] font-Americana text-brand-brown pb-4">
                        Cocoon Upper <br>Deluxe
                    </h2>

                    <p class="text-xs md:text-sm pb-5">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    </p>

                    <a @click="toggleModal" href="#" class="text-brand-brown underline">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    img: String,
    positionClass: String,
})

const modalOpen = ref(false)

const toggleModal = () => {
    modalOpen.value = !modalOpen.value
}
</script>