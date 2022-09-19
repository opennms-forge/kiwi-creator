import { PALETTE, PATH } from './constants'

export interface Swatch {
  id: number
  primary: string
  secondary?: string
  tertiary?: string
}

export interface Palette {
  colors: Swatch[]
  selectedSwatch: Swatch
  selectedAttribute: string
}

export interface Option {
  paths: string[]
  selectedPath: string
  selectedAttribute: string
}

export type PreviousType = typeof PALETTE | typeof PATH
