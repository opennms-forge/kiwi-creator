import { defineStore } from 'pinia'
import { useSwatchStore } from './swatchStore'
import { usePathsStore } from './pathsStore'
import { PreviousType } from '@/types'
import { PALETTE, PATH } from '@/constants'
import { useAttributeStore } from './attributeStore'
import useModal from '@/composables/useModal'

export const useUndoStore = defineStore('undoStore', () => {
  const { closeModal } = useModal()
  const swatchStore = useSwatchStore()
  const pathsStore = usePathsStore()
  const attributeStore = useAttributeStore()
  const previousType = ref<PreviousType>()
  const undoAttribute = ref<string>('')

  const setUndoAttribute = (attribute: string, type: PreviousType) => {
    previousType.value = type
    undoAttribute.value = attribute
  }

  const undo = () => {
    if (previousType.value === PALETTE) {
      swatchStore.undoSwatch(undoAttribute.value)
    }
    if (previousType.value === PATH) {
      pathsStore.undoPath(undoAttribute.value)
    }
  }

  const reset = () => {
    swatchStore.$reset()
    attributeStore.$reset()
    pathsStore.$reset()
    closeModal()
  }

  return {
    setUndoAttribute,
    undo,
    reset
  }
})
