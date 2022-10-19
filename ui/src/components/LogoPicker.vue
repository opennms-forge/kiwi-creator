<template>
  <div class="container" v-if="attributeStore.selectedAttribute === Attributes.BACKGROUND && pathsStore.selectedBackgroundPath">
    <div class="logo-box" 
      :class="{ 'selected': pathsStore.selectedLogoPath === LogoPaths[0] }" 
      @click="pathsStore.selectedLogoPath = LogoPaths[0]"
    >
      <img :src="LogoPaths[0].replace('/objects', '/icons')" />
    </div>

    <div class="logo-box" 
      :class="{ 'selected': pathsStore.selectedLogoPath === LogoPaths[1] }" 
      @click="pathsStore.selectedLogoPath = LogoPaths[1]"
    >
      <img :src="LogoPaths[1].replace('/objects', '/icons')" />
    </div>
  </div>
</template>

<script setup lang="ts" >
import { usePathsStore } from '@/store/pathsStore'
import { useAttributeStore } from '@/store/attributeStore'
import { LogoPaths, Attributes } from '@/constants'
const pathsStore = usePathsStore()
const attributeStore = useAttributeStore()
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  width: 150px;
  margin-left: 26px;
  margin-top: 15px;
  gap: 5px;

  .logo-box {
    height: 100%;
    width: 50%;
    cursor: pointer;
    text-align: center;
    padding-top: 6px;
    background: rgb(20, 209, 223);
    border-radius: 5px;
    border: 2px solid transparent;
  }

  .selected {
    border: 2px solid black;
    border-radius: 5px;
  }
}
</style>
