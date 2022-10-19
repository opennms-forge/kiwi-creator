<template>
  <div id="color-slider" v-if="display">
    <FeatherIcon :icon="Up" class="scroll-icon up-icon" @click="swiperRef.$el.swiper.slidePrev()" />
    <swiper
      class="swiper"
      direction="vertical"
      :slides-per-view="numOfSlides"
      :freeMode="true"
      :mousewheel="{ 
        sensitivity: .3, 
        eventsTarget: '#color-slider' 
      }"
      :modules="[Mousewheel, FreeMode]"
      ref="swiperRef"
    >
      <swiper-slide v-for="swatch in swatchStore.palette.colors">
        <div class="color-block" 
          :style="`background: ${swatch.primary === 'none' ? `url(${pathsStore.selectedBackgroundPath.replace('/objects', '/icons')}) no-repeat fixed center` : swatch.primary}`" 
          @click="onSelect(swatch)"
        >
          <FeatherIcon 
            v-if="swatch.id === swatchStore.palette.selectedSwatch.id"
            :icon="Check"
          />
        </div>
      </swiper-slide>
    </swiper>
    <FeatherIcon :icon="Down" class="scroll-icon down-icon" @click="swiperRef.$el.swiper.slideNext()" />
  </div>
</template>

<script setup lang="ts">
import { useSwatchStore } from '@/store/swatchStore'
import { useUndoStore } from '@/store/undoStore'
import { usePathsStore } from '@/store/pathsStore'
import Check from '@/assets/Check.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, FreeMode } from "swiper"
import 'swiper/css'
import { Swatch } from '@/types'
import { Attributes, PALETTE, PathsWithSpecialPalette } from '@/constants'
import Up from '@featherds/icon/navigation/ExpandLess' 
import Down from '@featherds/icon/navigation/ExpandMore'

const swatchStore = useSwatchStore()
const undoStore = useUndoStore()
const pathsStore = usePathsStore()
const swiperRef = ref()
const numOfSlides = ref(10)

useResizeObserver(swiperRef, (entries) => {
  const entry = entries[0]
  const { height } = entry.contentRect
  numOfSlides.value = Math.round(height / 46) 
})

const onSelect = (swatch: Swatch) => {
  swatchStore.setSwatch(swatch)
  undoStore.setUndoAttribute(swatchStore.palette.selectedAttribute, PALETTE)
}

const display = computed(() => {
  const selected = pathsStore.options.selectedPath
  const attr = pathsStore.options.selectedAttribute

  return (
    PathsWithSpecialPalette.includes(selected) ||
    (swatchStore.palette.colors.length && 
    attr !== Attributes.HEADGEAR &&
    attr !== Attributes.EYEWEAR &&
    attr !== Attributes.BACKGROUND &&
    attr !== Attributes.NECK)
  )
})
</script>

<style scoped lang="scss">
@import "@featherds/styles/mixins/elevation";

#color-slider {
  display: flex;
  width: 50%;
  border: 1px solid rgb(240, 247, 255);
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  background: #f6f8fa;
  position: relative;

  .swiper {
    .color-block {
      @include elevation(1);
      width: 44px;
      height: 42px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .scroll-icon {
    position: absolute;
    left: 31px;
    color: gray;
    font-size: 30px;
    cursor: pointer;
  }

  .up-icon {
    top: -24px;
  }

  .down-icon {
    bottom: -24px;
  }
}
</style>
