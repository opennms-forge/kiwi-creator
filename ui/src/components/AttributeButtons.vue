<template>
  <div id="attribute-btns">
    <FeatherButton 
      v-for="attribute of store.attributes"  
      primary
      @click="store.setAttribute(attribute)"
    >
      <template v-slot:icon>
        {{ attribute }}
        <FeatherIcon 
          v-if="attribute === store.selectedAttribute" 
          :icon="CheckCircle" 
          aria-hidden="true" 
          focusable="false" 
        />
     </template>
    </FeatherButton>
  </div>
</template>

<script setup lang="ts">
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { useAttributeStore } from '@/store/attributeStore'
const store = useAttributeStore()
</script>

<style lang="scss">
#attribute-btns {
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  // override feather defaults
  .btn {
    margin: 0px 0px 4px 0px !important;
    width: 185px;
    position: relative;
    svg {
      position: absolute !important;
      right: 2px !important;
    }
  }
}
</style>
