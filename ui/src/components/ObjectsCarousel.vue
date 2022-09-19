<template>
  <div id="object-slider" v-if="pathsStore.options.paths.length">
    <FeatherIcon :icon="Up" class="scroll-icon up-icon" @click="swiperRef.$el.swiper.slidePrev()" />
    <swiper
      class="swiper"
      direction="vertical"
      :slides-per-view="numOfSlides"
      :freeMode="true"
      :mousewheel="{
        sensitivity: 0.3,
        eventsTarget: '#object-slider' 
      }"
      :modules="[Mousewheel, FreeMode]"
      ref="swiperRef"
    >
      <swiper-slide v-for="path in pathsStore.options.paths">
        <div class="badge-container">
          <div class="block" @click="onSelect(path)">
            <FeatherIcon 
              :icon="CheckCircle" 
              v-if="path === pathsStore.options.selectedPath" 
            />
            <img :src="path.replace('/objects', '/icons')" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <FeatherIcon :icon="Down" class="scroll-icon down-icon" @click="swiperRef.$el.swiper.slideNext()" />
  </div>
</template>

<script setup lang="ts">
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { usePathsStore } from '@/store/pathsStore'
import { useUndoStore } from '@/store/undoStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, FreeMode } from "swiper"
import 'swiper/css'
import { Attributes, PATH } from '@/constants'
import Up from '@featherds/icon/navigation/ExpandLess' 
import Down from '@featherds/icon/navigation/ExpandMore'

const pathsStore = usePathsStore()
const undoStore = useUndoStore()
const swiperRef = ref()
const numOfSlides = ref(10)

useResizeObserver(swiperRef, (entries) => {
  const entry = entries[0]
  const { height } = entry.contentRect
  numOfSlides.value = Math.round(height / 70)
})

const onSelect = (path: string) => {
  if (pathsStore.options.selectedPath === path && pathsStore.options.selectedAttribute !== Attributes.EYES) {
    pathsStore.setPath('') // clear selection
  } else {
    pathsStore.setPath(path)
  }

  undoStore.setUndoAttribute(pathsStore.options.selectedAttribute, PATH)
}
</script>

<style scoped lang="scss">
@import "@featherds/styles/mixins/elevation";
@import "@featherds/styles/themes/variables";

#object-slider {
  display: flex;
  width: 50%;
  border: 1px solid rgb(221, 231, 240);
  padding-bottom: 10px;
  border-radius: 5px;
  background: white;
  position: relative;
  .swiper {

    .badge-container {
      padding: 10px;
      position: relative;
      .block {
        @include elevation(1);
        background: var($background);
        width: 62px;
        height: 63px;
        border-radius: 5px;
        cursor: pointer;

        // check on object
        svg {
          position: absolute;
          right: 1px;
          top: 12px;
          height: 17px;
          width: 20px;
          color: green;
        }

        // object
        img {
          margin: auto;
          display: block;
          height: 62px; 
          width: 40px;
        }
      }
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
