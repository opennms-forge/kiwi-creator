import { defineStore } from 'pinia'
import { useAttributeStore } from './attributeStore'
import { Attributes, BodySwatches, BeakSwatches, EyeSwatches, ItemSwatches, BackgroundSwatches } from '@/constants'
import { Palette, Swatch } from '@/types'

export const useSwatchStore = defineStore('swatchStore', {
  state: () => ({
    bodySwatches: BodySwatches,
    beakSwatches: BeakSwatches,
    eyeSwatches: EyeSwatches,
    itemSwatches: ItemSwatches,
    backgroundSwatches: BackgroundSwatches,

    selectedBodySwatch: BodySwatches[0],
    selectedBeakSwatch: BeakSwatches[0],
    selectedEyeSwatch: EyeSwatches[0],
    selectedHatSwatch: ItemSwatches[0],
    selectedGlassesSwatch: ItemSwatches[0],
    selectedScarfSwatch: ItemSwatches[0],
    selectedBackgroundSwatch: BackgroundSwatches[0],

    previousBodySwatch: BodySwatches[0],
    previousBeakSwatch: BeakSwatches[0],
    previousEyeSwatch: EyeSwatches[0],
    previousHatSwatch: ItemSwatches[0],
    previousGlassesSwatch: ItemSwatches[0],
    previousScarfSwatch: ItemSwatches[0],
    previousBackgroundSwatch: BackgroundSwatches[0]
  }),
  actions: {
    setSwatch(swatch: Swatch, randomAttribute?: string) {
      const { selectedAttribute } = useAttributeStore()

      switch(randomAttribute || selectedAttribute) {
        case Attributes.BODY:
          this.previousBodySwatch = this.selectedBodySwatch
          return this.selectedBodySwatch = swatch
        case Attributes.BEAK:
          this.previousBeakSwatch = this.selectedBeakSwatch
          return this.selectedBeakSwatch = swatch 
        case Attributes.EYES:
          this.previousEyeSwatch = this.selectedEyeSwatch
          return this.selectedEyeSwatch = swatch
        case Attributes.HEADGEAR:
          this.previousHatSwatch = this.selectedHatSwatch
          return this.selectedHatSwatch = swatch
        case Attributes.EYEWEAR:
          this.previousGlassesSwatch = this.selectedGlassesSwatch
          return this.selectedGlassesSwatch = swatch
        case Attributes.NECK:
          this.previousScarfSwatch = this.selectedScarfSwatch
          return this.selectedScarfSwatch = swatch
        case Attributes.BACKGROUND:
          this.previousBackgroundSwatch = this.selectedBackgroundSwatch
          return this.selectedBackgroundSwatch = swatch
        default:
          return
      }
    },
    undoSwatch(attribute: string) {
      switch(attribute) {
        case Attributes.BODY:
          return this.undo('selectedBodySwatch', 'previousBodySwatch')
        case Attributes.BEAK:
          return this.undo('selectedBeakSwatch', 'previousBeakSwatch')
        case Attributes.EYES:
          return this.undo('selectedEyeSwatch', 'previousEyeSwatch')
        case Attributes.HEADGEAR:
          return this.undo('selectedHatSwatch', 'previousHatSwatch')
        case Attributes.EYEWEAR:
          return this.undo('selectedGlassesSwatch', 'previousGlassesSwatch')
        case Attributes.NECK:
          return this.undo('selectedScarfSwatch', 'previousScarfSwatch')
        case Attributes.BACKGROUND:
          return this.undo('selectedBackgroundSwatch', 'previousBackgroundSwatch')
        default:
          return
      }
    },
    undo(selected: keyof (typeof this.$state), previous: keyof (typeof this.$state)) {
      const current: any = this[selected]
      this[selected] = this[previous] as any
      this[previous] = current
    }
  },
  getters: {
    palette: (state): Palette  => {
      const { selectedAttribute } = useAttributeStore()

      switch(selectedAttribute) {
        case Attributes.BODY:
          return { 
            colors: state.bodySwatches, 
            selectedSwatch: state.selectedBodySwatch,
            selectedAttribute
          }
        case Attributes.BEAK:
          return { 
            colors: state.beakSwatches, 
            selectedSwatch: state.selectedBeakSwatch,
            selectedAttribute
          }
        case Attributes.EYES:
          return { 
            colors: state.eyeSwatches, 
            selectedSwatch: state.selectedEyeSwatch,
            selectedAttribute
          }
        case Attributes.HEADGEAR:
          return { 
            colors: state.itemSwatches,
            selectedSwatch: state.selectedHatSwatch,
            selectedAttribute
          }
        case Attributes.EYEWEAR:
          return { 
            colors: state.itemSwatches,
            selectedSwatch: state.selectedGlassesSwatch,
            selectedAttribute
          }
        case Attributes.HEADGEAR:
          return { 
            colors: state.itemSwatches,
            selectedSwatch: state.selectedScarfSwatch,
            selectedAttribute
          }
        case Attributes.BACKGROUND:
          return { 
            colors: state.backgroundSwatches,
            selectedSwatch: state.selectedBackgroundSwatch,
            selectedAttribute
          }
        default:
          return { 
            colors: [], 
            selectedSwatch: {} as Swatch,
            selectedAttribute 
          }
      }
    }
  }
})
