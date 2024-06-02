<template>
  <div class="max-w-base mx-auto pt-20">
    <div class="max-w-7xl mx-auto px-12">
      <h1 class="text-[27px] lg:text-3xl leading-9 2xl:text-4xl 2xl:leading-10 text-brand-brown font-Americana">
        Discover Ulaman
        <br>
        from above
      </h1>

      <div class="block 2xl:hidden text-sm text-brand-brown font-medium pt-4">
        <span class="hidden md:block">
          * Navigate with 2 fingers
        </span>
        <span class="md:hidden">
          * Use your finger to navigate
        </span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="relative w-full h-full overflow-x-auto hide-scrollbar">
        <div class="w-[1440px] whitespace-nowrap">
          <img src="/Map.png" alt="map">
        </div>

        <Badge :img="'hostel.svg'" :position-class="'top-[152px] left-[202px]'"/>
        <Badge :img="'hostel.svg'" :position-class="'top-[230px] left-[156px]'"/>
        <Badge :img="'hostel.svg'" :position-class="'top-[182px] left-[358px]'"/>
        <Badge :img="'grass.svg'" :position-class="'top-[306px] left-[420px]'"/>
        <Badge :img="'budda.svg'" :position-class="'top-[332px] left-[580px]'"/>
        <Badge :img="'dining.svg'" :position-class="'top-[170px] left-[600px]'"/>
        <Badge :img="'grass.svg'" :position-class="'top-[308px] left-[660px]'"/>
        <Badge :img="'dining.svg'" :position-class="'top-[136px] left-[744px]'"/>

        <Badge :img="'tennis-ball.svg'" :position-class="'top-[76px] left-[780px]'"/>
        <Badge :img="'dining.svg'" :position-class="'top-[384px] left-[740px]'"/>
        <Badge :img="'hostel.svg'" :position-class="'top-[372px] left-[864px]'"/>
        <Badge :img="'gift.svg'" :position-class="'top-[94px] left-[910px]'"/>
        <Badge :img="'info.svg'" :position-class="'top-[542px] left-[908px]'"/>
        <Badge :img="'hostel.svg'" :position-class="'top-[426px] left-[980px]'"/>
      </div>
    </div>

    <!-- sticky -->
    <div class="sticky bottom-8 ml-32 w-fit bg-brand-brown rounded-3xl flex items-center gap-1.5 p-2.5 pr-3">
      <span class="bg-brand-cream-dark rounded-full size-2"></span>
      <span class="text-sm text-brand-cream-dark">
        Tap on an icon
      </span>
    </div>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Hides scrollbars in Chrome, Safari */
}

.hide-scrollbar {
  -ms-overflow-style: none;  /* Hides scrollbars in IE and Edge */
  scrollbar-width: none;     /* Hides scrollbars in Firefox */
}
</style>