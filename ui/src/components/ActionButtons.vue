<template>
  <div id="action-btns-container">
    <!-- Clear -->
    <FeatherButton icon="Start Over" @click="openModal">
      <FeatherIcon :icon="Clear" />
    </FeatherButton>

    <!-- Undo -->
    <FeatherButton icon="Undo Selection" @click="undoStore.undo">
      <FeatherIcon :icon="Undo" />
    </FeatherButton>

    <!-- Random -->
    <FeatherButton icon="Randomizer" @click="randomizerStore.randomize">
      <FeatherIcon :icon="Randomize" />
    </FeatherButton>

    <!-- Share -->
    <FeatherButton icon="Save" @click="save">
      <FeatherIcon :icon="Save"/>
    </FeatherButton>
  </div>
</template>

<script setup lang="ts">
import Clear from '@featherds/icon/action/Delete'
import Undo from '@featherds/icon/action/Restore'
import Save from '@featherds/icon/action/DownloadFile'
import { useUndoStore } from '@/store/undoStore'
import { useRandomizerStore } from '@/store/randomizerStore'
import Randomize from '@/assets/Randomize.vue'
import { save } from '@/utils/save'
import useModal from '@/composables/useModal'

const undoStore = useUndoStore()
const randomizerStore = useRandomizerStore()
const { openModal } = useModal()
</script>

<style lang="scss">
#action-btns-container {
  display: flex;
  position: absolute;
  bottom: -70px;

  // override feather defaults
  .btn-icon {
    height: 3.5rem;
    width: 3.5rem;
  }
  svg {
    width: 2.5rem;
    font-size: 2.5rem;
  }
}
</style>
