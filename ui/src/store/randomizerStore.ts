import { defineStore } from 'pinia'
import { useSwatchStore } from './swatchStore'
import { usePathsStore } from './pathsStore'
import { Swatch } from '@/types'
import { useUndoStore } from './undoStore'
import { Attributes, BodySwatches, EyeSwatches, EyePaths, NeckPaths, HeadgearPaths, EyewearPaths, RightPropPaths, LeftPropPaths, PATH, BeakSwatches, ItemSwatches } from '@/constants'

export const useRandomizerStore = defineStore('randomizerStore', () => {
  const undoStore = useUndoStore()
  const swatchStore = useSwatchStore()
  const pathsStore = usePathsStore()

  const getRandom = (list: Swatch[] | string[]) => list[Math.floor(Math.random() * list.length)]

  const randomize = () => {
    const bodySwatch = getRandom(BodySwatches) as Swatch
    const beakSwatch = getRandom(BeakSwatches) as Swatch
    const eyesSwatch = getRandom(EyeSwatches) as Swatch
    const itemSwatch1 = getRandom(ItemSwatches) as Swatch
    const itemSwatch2 = getRandom(ItemSwatches) as Swatch
    const itemSwatch3 = getRandom(ItemSwatches) as Swatch

    const eyePath = getRandom(EyePaths) as string
    const neckPath = getRandom(NeckPaths) as string
    const headgearPath = getRandom(HeadgearPaths) as string
    const eyewearPath = getRandom(EyewearPaths) as string
    const rightPropPath = getRandom(RightPropPaths) as string
    const leftPropPath = getRandom(LeftPropPaths) as string

    swatchStore.setSwatch(bodySwatch, Attributes.BODY)
    swatchStore.setSwatch(beakSwatch, Attributes.BEAK)
    swatchStore.setSwatch(eyesSwatch, Attributes.EYES)
    swatchStore.setSwatch(itemSwatch1, Attributes.HEADGEAR)
    swatchStore.setSwatch(itemSwatch2, Attributes.EYEWEAR)
    swatchStore.setSwatch(itemSwatch3, Attributes.NECK)

    pathsStore.setPath(eyePath, Attributes.EYES)
    pathsStore.setPath(neckPath, Attributes.NECK)
    pathsStore.setPath(headgearPath, Attributes.HEADGEAR)
    pathsStore.setPath(eyewearPath, Attributes.EYEWEAR)
    pathsStore.setPath(rightPropPath, Attributes.RIGHT_PROP)
    pathsStore.setPath(leftPropPath, Attributes.LEFT_PROP)

    undoStore.setUndoAttribute(Attributes.LEFT_PROP, PATH)
  }

  return {
    randomize
  }
})
