<template>
<FeatherDialog relative hideClose v-model="isOpen" :labels="labels">
    <div >
      This will clear all the selections you've made and reset your Kiwi.
    </div>

    <template v-slot:footer>
      <FeatherButton primary @click="undoStore.reset">
        Yes, Reset
      </FeatherButton>
      <FeatherButton default @click="closeModal">
        No, Keep Kiwi
      </FeatherButton>
    </template>
</FeatherDialog>
</template>

<script setup lang="ts">
import useModal from '@/composables/useModal'
import { useUndoStore } from '@/store/undoStore'

const undoStore = useUndoStore()
const { isVisible, closeModal } = useModal()
const isOpen = computed(() => isVisible.value)

const labels = reactive({
  title: 'You sure about that?',
  close: 'Close'
})
</script>
