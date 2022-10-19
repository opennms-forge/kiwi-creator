import { defineStore } from 'pinia'
import { useAttributeStore } from './attributeStore'
import { Option } from '@/types'
import { Attributes, EyePaths, NeckPaths, HeadgearPaths, EyewearPaths, RightPropPaths, LeftPropPaths, BackgroundPaths, LogoPaths } from '@/constants'

export const usePathsStore = defineStore('pathsStore', {
  state: () => ({
    eyePaths: EyePaths,
    neckPaths: NeckPaths,
    headgearPaths: HeadgearPaths,
    eyewearPaths: EyewearPaths,
    rightPropPaths: RightPropPaths,
    leftPropPaths: LeftPropPaths,
    backgroudPaths: BackgroundPaths,

    selectedEyesPath: EyePaths[0],
    selectedNeckPath: '',
    selectedHeadgearPath: '',
    selectedEyewearPath: '',
    selectedRightPropPath: '',
    selectedLeftPropPath: '',
    selectedBackgroundPath: '',
    selectedLogoPath: LogoPaths[0],

    previousEyesPath: '',
    previousBeakPath: '',
    previousNeckPath: '',
    previousHeadgearPath: '',
    previousEyewearPath: '',
    previousRightPropPath: '',
    previousLeftPropPath: '',
    previousBackgroundPath: '',
  }),
  actions: {
    setPath(path: string, randomAttribute?: string) {
      const { selectedAttribute } = useAttributeStore()

      switch(randomAttribute || selectedAttribute) {
        case Attributes.EYES:
          this.previousEyesPath = this.selectedEyesPath
          return this.selectedEyesPath = path
        case Attributes.NECK:
          this.previousNeckPath = this.selectedNeckPath
          return this.selectedNeckPath = path
        case Attributes.HEADGEAR:
          this.previousHeadgearPath = this.selectedHeadgearPath
          return this.selectedHeadgearPath = path
        case Attributes.EYEWEAR:
          this.previousEyewearPath = this.selectedEyewearPath
          return this.selectedEyewearPath = path
        case Attributes.RIGHT_PROP:
          this.previousRightPropPath = this.selectedRightPropPath
          return this.selectedRightPropPath = path
        case Attributes.LEFT_PROP:
          this.previousLeftPropPath = this.selectedLeftPropPath
          return this.selectedLeftPropPath = path
        case Attributes.BACKGROUND:
          this.previousBackgroundPath = this.selectedBackgroundPath
          return this.selectedBackgroundPath = path
        default:
          return ''
      }
    },
    undoPath(attribute: string) {
      switch(attribute) {
        case Attributes.EYES:
          return this.undo('selectedEyesPath', 'previousEyesPath')
        case Attributes.NECK:
          return this.undo('selectedNeckPath', 'previousNeckPath')
        case Attributes.HEADGEAR:
          return this.undo('selectedHeadgearPath', 'previousHeadgearPath')
        case Attributes.EYEWEAR:
          return this.undo('selectedEyewearPath', 'previousEyewearPath')
        case Attributes.RIGHT_PROP:
          return this.undo('selectedRightPropPath', 'previousRightPropPath')
        case Attributes.LEFT_PROP:
          return this.undo('selectedLeftPropPath', 'previousLeftPropPath')
        case Attributes.BACKGROUND:
          return this.undo('selectedBackgroundPath', 'previousBackgroundPath')
        default:
          return ''
      }
    },
    undo(selected: keyof (typeof this.$state), previous: keyof (typeof this.$state)) {
      const current: any = this[selected]
      this[selected] = this[previous] as any
      this[previous] = current
    }
  },
  getters: {
    options: (state): Option => {
      const { selectedAttribute } = useAttributeStore()

      switch(selectedAttribute) {
        case Attributes.EYES:
          return { 
            paths: state.eyePaths, 
            selectedPath: state.selectedEyesPath,
            selectedAttribute
          }
        case Attributes.NECK:
          return { 
            paths: state.neckPaths, 
            selectedPath: state.selectedNeckPath,
            selectedAttribute
          }
        case Attributes.HEADGEAR:
          return { 
            paths: state.headgearPaths, 
            selectedPath: state.selectedHeadgearPath,
            selectedAttribute          
          }
        case Attributes.EYEWEAR:
          return { 
            paths: state.eyewearPaths, 
            selectedPath: state.selectedEyewearPath,
            selectedAttribute          
          }
        case Attributes.RIGHT_PROP:
          return { 
            paths: state.rightPropPaths, 
            selectedPath: state.selectedRightPropPath,
            selectedAttribute          
          }
        case Attributes.LEFT_PROP:
          return { 
            paths: state.leftPropPaths, 
            selectedPath: state.selectedLeftPropPath,
            selectedAttribute          
          }
        case Attributes.BACKGROUND:
          return { 
            paths: state.backgroudPaths, 
            selectedPath: state.selectedBackgroundPath,
            selectedAttribute          
          }
        default:
          return { 
            paths: [], 
            selectedPath: '',
            selectedAttribute          
          }
      }
    }
  }
})
