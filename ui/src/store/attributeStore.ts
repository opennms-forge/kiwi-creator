import { defineStore } from 'pinia'
import { Attributes } from '@/constants'

export const useAttributeStore = defineStore('attributeStore', {
  state: () => ({
    attributes: Object.values(Attributes),
    selectedAttribute: Attributes.BODY as string
  }),
  actions: {
    setAttribute(attribute: string) { 
      this.selectedAttribute = attribute
    }
  }
})
