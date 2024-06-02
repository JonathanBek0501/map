<template>
  <div class="max-w-base mx-auto pt-20">
    <div class="max-w-7xl mx-auto px-12">
      <h1 class="text-4xl text-brand-brown font-Americana">
        Discover Ulaman
        <br>
        from above
      </h1>
    </div>
    <div class="flex items-center justify-center">
      <div class="relative">
        <img src="/Map.png" alt="map">

        <Badge :img="'hostel.svg'" :position-class="'top-[152px] left-[202px]'"/>
        <Badge :img="'hostel.svg'" :position-class="'top-[230px] left-[156px]'"/>
        <Badge :img="'hostel.svg'" :position-class="'top-[182px] left-[358px]'"/>
        <Badge :img="'grass.svg'" :position-class="'top-[306px] left-[420px]'"/>
        <Badge :img="'budda.svg'" :position-class="'top-[332px] left-[580px]'"/>
        <Badge :img="'dining.svg'" :position-class="'top-[170px] left-[600px]'"/>
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
