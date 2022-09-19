<template>
  <div id="kiwi-container">
  </div>
</template>

<!-- TODO: Rewrite this file -->

<script setup lang="ts">
import { usePathsStore } from '@/store/pathsStore'
import { useSwatchStore } from '@/store/swatchStore'

import EyeStandard from '@/assets/objects/eyes/Eye-Standard.svg?raw'
import EyesAngry from '@/assets/objects/eyes/Eye-Angry.svg?raw'
import EyesClosedDown from '@/assets/objects/eyes/Eye-ClosedDown.svg?raw'
import EyesClosedUp from '@/assets/objects/eyes/Eye-ClosedUp.svg?raw'
import EyesGlisten from '@/assets/objects/eyes/Eye-Glisten.svg?raw'
import EyesLashes from '@/assets/objects/eyes/Eye-Lashes.svg?raw'
import EyesSparkle from '@/assets/objects/eyes/Eye-Sparkle.svg?raw'
import EyesSqueeze from '@/assets/objects/eyes/Eye-Squeeze.svg?raw'
import EyesHeart from '@/assets/objects/eyes/Eye-Heart.svg?raw'
import EyesTired from '@/assets/objects/eyes/Eye-Tired.svg?raw'
import EyesWink from '@/assets/objects/eyes/Eye-Wink.svg?raw'

import GlassColor from '@/assets/objects/eyewear/Glasses-ColorRound.svg?raw'
import GlassEye1 from '@/assets/objects/eyewear/Glasses-Eyepatch1.svg?raw'
import GlassEye2 from '@/assets/objects/eyewear/Glasses-Eyepatch2.svg?raw'
import GlassHeart from '@/assets/objects/eyewear/Glasses-Heart.svg?raw'
import GlassMono from '@/assets/objects/eyewear/Glasses-Monocle.svg?raw'
import GlassRect from '@/assets/objects/eyewear/Glasses-Rectangle.svg?raw'
import GlassRound from '@/assets/objects/eyewear/Glasses-Round.svg?raw'
import GlassShutter from '@/assets/objects/eyewear/Glasses-Shutter.svg?raw'
import GlassSki from '@/assets/objects/eyewear/Glasses-Ski.svg?raw'
import GlassSun from '@/assets/objects/eyewear/Glasses-Sun.svg?raw'

import HatWitch from '@/assets/objects/headgear/Hat-Witch.svg?raw'
import HatTop from '@/assets/objects/headgear/Hat-Top.svg?raw'
import HatFlower from '@/assets/objects/headgear/Hat-Flower.svg?raw'
import HatCrown from '@/assets/objects/headgear/Hat-Crown.svg?raw'
import HatCowboy from '@/assets/objects/headgear/Hat-Cowboy.svg?raw'
import HatCapLogo from '@/assets/objects/headgear/Hat-CapLogo.svg?raw'
import HatCap from '@/assets/objects/headgear/Hat-Cap.svg?raw'
import HatBow from '@/assets/objects/headgear/Hat-Bow.svg?raw'
import HatBeret from '@/assets/objects/headgear/Hat-Beret.svg?raw'
import HatHeadphones from '@/assets/objects/headgear/Hat-Headphones.svg?raw'
import HatHijab from '@/assets/objects/headgear/Hat-Hijab.svg?raw'
import HatKnit from '@/assets/objects/headgear/Hat-Knit.svg?raw'
import HatTurban from '@/assets/objects/headgear/Hat-Turban.svg?raw'

import LeftFishing from '@/assets/objects/left/Left-Fishing.svg?raw'
import LeftCoffee from '@/assets/objects/left/Left-Coffee.svg?raw'
import LeftNotebook from '@/assets/objects/left/Left-Notebook.svg?raw'
import LeftBroom from '@/assets/objects/left/Left-Broom.svg?raw'
import LeftPaintbrush from '@/assets/objects/left/Left-Paintbrush.svg?raw'
import LeftPhone from '@/assets/objects/left/Left-Phone.svg?raw'
import LeftSkateboard from '@/assets/objects/left/Left-Skateboard.svg?raw'
import LeftStaff from '@/assets/objects/left/Left-Staff.svg?raw'
import LeftWand from '@/assets/objects/left/Left-Wand.svg?raw'
import LeftGame from '@/assets/objects/left/Left-GameController.svg?raw'
import LeftBook from '@/assets/objects/left/Left-Book.svg?raw'

import RightSuit from '@/assets/objects/right/Right-Suitcase.svg?raw'
import RightTutu from '@/assets/objects/right/Right-Tutu.svg?raw'
import RightLaptop from '@/assets/objects/right/Right-Laptop.svg?raw'
import RightSnowboard from '@/assets/objects/right/Right-Snowboard.svg?raw'
import RightTennis from '@/assets/objects/right/Right-Tennis.svg?raw'
import RightBackpack from '@/assets/objects/right/Right-Backpack.svg?raw'
import RightStick from '@/assets/objects/right/Right-HockeyStick.svg?raw'
import RightSword from '@/assets/objects/right/Right-Sword.svg?raw'
import RightUlf from '@/assets/objects/right/Right-UlfPlushie.svg?raw'
import RightWeights from '@/assets/objects/right/Right-Weights.svg?raw'

import NeckBandana from '@/assets/objects/neck/Neck-Bandana.svg?raw'
import NeckBowTie from '@/assets/objects/neck/Neck-BowTie.svg?raw'
import NeckCamera from '@/assets/objects/neck/Neck-Camera.svg?raw'
import NeckPearls from '@/assets/objects/neck/Neck-Pearls.svg?raw'
import NeckScarf1 from '@/assets/objects/neck/Neck-Scarf1.svg?raw'
import NeckScarf2 from '@/assets/objects/neck/Neck-Scarf2.svg?raw'
import NeckScarf3 from '@/assets/objects/neck/Neck-Scarf3.svg?raw'
import NeckTie from '@/assets/objects/neck/Neck-Tie.svg?raw'
import { PathsWithSpecialPalette } from '@/constants'

const pathsStore = usePathsStore()
const swatchStore = useSwatchStore()
const parser = new DOMParser()

// get the kiwi base SVGs
const base = computedAsync(async () => (await import(/* @vite-ignore */ '/objects/base.svg?raw')).default)
const baseWing = computedAsync(async () => (await import(/* @vite-ignore */ '/objects/base_wing.svg?raw')).default)
const standardEyes = computedAsync(async () => (await import(/* @vite-ignore */ '/objects/eyes/Eye-Standard.svg?raw')).default)

// compute colors
const eyeColor = computed(() => swatchStore.selectedEyeSwatch)
const beakColor = computed(() => swatchStore.selectedBeakSwatch)
const bodyColor = computed(() => swatchStore.selectedBodySwatch)
const hatColor = computed(() => swatchStore.selectedHatSwatch)
const glassesColor = computed(() => swatchStore.selectedGlassesSwatch)

// compute paths
const eyePath = computed(() => pathsStore.selectedEyesPath)
const eyewearPath = computed(() => pathsStore.selectedEyewearPath)
const headgearPath = computed(() => pathsStore.selectedHeadgearPath)
const neckPath = computed(() => pathsStore.selectedNeckPath)
const leftPath = computed(() => pathsStore.selectedLeftPropPath)
const rightPath = computed(() => pathsStore.selectedRightPropPath)

// base
watch([base, baseWing, standardEyes], ([baseSVG, baseWingSVG, standardEyes]) => {
  const kiwiContainer = document.getElementById('kiwi-container') as HTMLElement
  if (!kiwiContainer) return
  if (kiwiContainer.firstChild) kiwiContainer.removeChild(kiwiContainer.firstChild)

  if (baseSVG) {
    const doc = parser.parseFromString(baseSVG, "image/svg+xml")
    doc.documentElement.style.width = '100%'
    doc.documentElement.style.height = '100%'
    kiwiContainer.append(doc.documentElement)
  }

  if (baseWingSVG) {
    const headgearHolder = document.getElementById('right-wing-holder') as HTMLElement
    if (!headgearHolder) return
    if (headgearHolder.firstChild) headgearHolder.removeChild(headgearHolder.firstChild)
    const doc = parser.parseFromString(baseWingSVG, "image/svg+xml")
    headgearHolder.append(doc.documentElement)
  }

  if (standardEyes) {
    const eyesHolder = document.getElementById('eyes-holder') as HTMLElement
    if (!eyesHolder) return
    if (eyesHolder.firstChild) eyesHolder.removeChild(eyesHolder.firstChild)
    const doc = parser.parseFromString(standardEyes, "image/svg+xml")
    eyesHolder.append(doc.documentElement)
  }
})

// body
watch(bodyColor, (color) => {
  const body = document.getElementById('body-fill') as HTMLElement
  const hair = document.getElementById('hair-fill') as HTMLElement
  const leftWing = document.getElementById('left-wing-fill') as HTMLElement
  const rightWing = document.getElementById('right-wing-fill') as HTMLElement
  if (body && hair && leftWing && rightWing) {
    body.style.fill = color.primary
    hair.style.fill = color.primary
    leftWing.style.fill = color.primary as string
    rightWing.style.fill = color.primary as string
  }
})

// beak and legs
watch(beakColor, (color) => {
  const beakFill = document.getElementById('beak-fill') as HTMLElement
  const rleg = document.getElementById('right-leg-fill') as HTMLElement
  const lleg = document.getElementById('left-leg-fill') as HTMLElement
  if (beakFill) beakFill.style.fill = color.primary
  if (rleg) rleg.style.fill = color.primary
  if (lleg) lleg.style.fill = color.primary
})

// hat color
watch([headgearPath, hatColor], ([path, color]) => {
  const hat = document.getElementById('cap-holder') as HTMLElement
  if (hat && PathsWithSpecialPalette.includes(path)) {
    hat.style.fill = color.primary as string
  } else {
    hat.style.fill = '#000'
  }
})

// eyes
watch([eyePath, eyeColor], ([path, color]) => {
  let svg
  const eyesHolder = document.getElementById('eyes-holder') as HTMLElement
  if (!eyesHolder) return
  if (eyesHolder.firstChild) eyesHolder.removeChild(eyesHolder.firstChild)

  if (path === '/objects/eyes/Eye-Standard.svg') svg = EyeStandard
  if (path === '/objects/eyes/Eye-Angry.svg') svg = EyesAngry
  if (path === '/objects/eyes/Eye-ClosedDown.svg') svg = EyesClosedDown
  if (path === '/objects/eyes/Eye-ClosedUp.svg') svg = EyesClosedUp
  if (path === '/objects/eyes/Eye-Glisten.svg') svg = EyesGlisten
  if (path === '/objects/eyes/Eye-Heart.svg') svg = EyesHeart
  if (path === '/objects/eyes/Eye-Lashes.svg') svg = EyesLashes
  if (path === '/objects/eyes/Eye-Sparkle.svg') svg = EyesSparkle
  if (path === '/objects/eyes/Eye-Squeeze.svg') svg = EyesSqueeze
  if (path === '/objects/eyes/Eye-Tired.svg') svg = EyesTired
  if (path === '/objects/eyes/Eye-Wink.svg') svg = EyesWink

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    eyesHolder.append(doc.documentElement)
    const eye1 = document.getElementById('eye') as HTMLElement
    const eye2 = document.getElementById('eye-2') as HTMLElement
    const EyeLashes = document.getElementById('Eye-Lashes') as HTMLElement
    const EyeSparkle = document.getElementById('Eye-Sparkle') as HTMLElement

    eyesHolder.style.fill = color.primary
    eyesHolder.style.stroke = color.primary
  
    if (eye1 && eye2) {
      eye1.style.fill = color.primary
      eye2.style.fill = color.primary
    }
    if (EyeLashes) EyeLashes.style.fill = color.primary
    if (EyeSparkle) EyeSparkle.style.fill = color.primary
  }
})

// neck
watch(neckPath, (path) => {
  let svg
  let holder

  const neckHolder = document.getElementById('neck-holder') as HTMLElement
  const bandanaHolder = document.getElementById('bandana-holder') as HTMLElement
  const pearlsHolder = document.getElementById('pearls-holder') as HTMLElement
  const cameraHolder = document.getElementById('camera-holder') as HTMLElement
  const scarfHolder = document.getElementById('scarf-holder') as HTMLElement

  if (neckHolder && neckHolder.firstChild) neckHolder.removeChild(neckHolder.firstChild)
  if (bandanaHolder && bandanaHolder.firstChild) bandanaHolder.removeChild(bandanaHolder.firstChild)
  if (pearlsHolder && pearlsHolder.firstChild) pearlsHolder.removeChild(pearlsHolder.firstChild)
  if (cameraHolder && cameraHolder.firstChild) cameraHolder.removeChild(cameraHolder.firstChild)
  if (scarfHolder && scarfHolder.firstChild) scarfHolder.removeChild(scarfHolder.firstChild)

  if (path === '/objects/neck/Neck-Bandana.svg') svg = NeckBandana
  if (path === '/objects/neck/Neck-Camera.svg') svg = NeckCamera
  if (path === '/objects/neck/Neck-BowTie.svg') svg = NeckBowTie
  if (path === '/objects/neck/Neck-Pearls.svg') svg = NeckPearls
  if (path === '/objects/neck/Neck-Scarf1.svg') svg = NeckScarf1
  if (path === '/objects/neck/Neck-Scarf2.svg') svg = NeckScarf2
  if (path === '/objects/neck/Neck-Scarf3.svg') svg = NeckScarf3
  if (path === '/objects/neck/Neck-Tie.svg') svg = NeckTie

  if (pathsStore.selectedNeckPath.includes('Bandana')) {
    holder = bandanaHolder
  } else if (pathsStore.selectedNeckPath.includes('Camera')) {
    holder = cameraHolder
  } else if (pathsStore.selectedNeckPath.includes('Pearls')) {
    holder = pearlsHolder
  } else if (pathsStore.selectedNeckPath.includes('Scarf3')) {
    holder = scarfHolder
  } else {
    holder = neckHolder
  }

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    holder.append(doc.documentElement)
  }
})

// headgear
watch(headgearPath, (path) => {
  let svg
  let holder

  const witchHolder = document.getElementById('witch-holder') as HTMLElement
  const topHolder = document.getElementById('top-holder') as HTMLElement
  const flowerHolder = document.getElementById('flower-holder') as HTMLElement
  const crownHolder = document.getElementById('crown-holder') as HTMLElement
  const cowbodyHolder = document.getElementById('cowboy-holder') as HTMLElement
  const capHolder = document.getElementById('cap-holder') as HTMLElement
  const beretHolder = document.getElementById('beret-holder') as HTMLElement
  const headphonesHolder = document.getElementById('headphones-holder') as HTMLElement
  const turbanHolder = document.getElementById('turban-holder') as HTMLElement
  const hijabHolder = document.getElementById('hijab-holder') as HTMLElement
  const knitHolder = document.getElementById('knit-holder') as HTMLElement

  if (witchHolder && witchHolder.firstChild) witchHolder.removeChild(witchHolder.firstChild)
  if (topHolder && topHolder.firstChild) topHolder.removeChild(topHolder.firstChild)
  if (flowerHolder && flowerHolder.firstChild) flowerHolder.removeChild(flowerHolder.firstChild)
  if (crownHolder && crownHolder.firstChild) crownHolder.removeChild(crownHolder.firstChild)
  if (cowbodyHolder && cowbodyHolder.firstChild) cowbodyHolder.removeChild(cowbodyHolder.firstChild)
  if (capHolder && capHolder.firstChild) capHolder.removeChild(capHolder.firstChild)
  if (beretHolder && beretHolder.firstChild) beretHolder.removeChild(beretHolder.firstChild)
  if (headphonesHolder && headphonesHolder.firstChild) headphonesHolder.removeChild(headphonesHolder.firstChild)
  if (turbanHolder && turbanHolder.firstChild) turbanHolder.removeChild(turbanHolder.firstChild)
  if (hijabHolder && hijabHolder.firstChild) hijabHolder.removeChild(hijabHolder.firstChild)
  if (knitHolder && knitHolder.firstChild) knitHolder.removeChild(knitHolder.firstChild)

  if (path === '/objects/headgear/Hat-Witch.svg') svg = HatWitch
  if (path === '/objects/headgear/Hat-Top.svg') svg = HatTop
  if (path === '/objects/headgear/Hat-Flower.svg') svg = HatFlower
  if (path === '/objects/headgear/Hat-Crown.svg') svg = HatCrown
  if (path === '/objects/headgear/Hat-Cowboy.svg') svg = HatCowboy
  if (path === '/objects/headgear/Hat-CapLogo.svg') svg = HatCapLogo
  if (path === '/objects/headgear/Hat-Cap.svg') svg = HatCap
  if (path === '/objects/headgear/Hat-Bow.svg') svg = HatBow
  if (path === '/objects/headgear/Hat-Beret.svg') svg = HatBeret
  if (path === '/objects/headgear/Hat-Headphones.svg') svg = HatHeadphones
  if (path === '/objects/headgear/Hat-Hijab.svg') svg = HatHijab
  if (path === '/objects/headgear/Hat-Knit.svg') svg = HatKnit
  if (path === '/objects/headgear/Hat-Turban.svg') svg = HatTurban

  if(pathsStore.selectedHeadgearPath.includes('Witch')) {
    holder = witchHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Top')) {
    holder = topHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Crown')) {
    holder = crownHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Cap')) {
    holder = capHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Beret')) {
    holder = beretHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Cowboy')) {
    holder = cowbodyHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Hijab')) {
    holder = hijabHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Knit')) {
    holder = knitHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Headphones')) {
    holder = headphonesHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Turban')) {
    holder = turbanHolder
  } else {
    holder = flowerHolder
  }

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    holder.append(doc.documentElement)
  }
})

// eyewear
watch([eyewearPath, glassesColor], ([path, color]) => {
  let holder
  let svg

  const bandageHolder = document.getElementById('bandage-holder') as HTMLElement
  const patchHolder = document.getElementById('patch-holder') as HTMLElement
  const monocleHolder = document.getElementById('monocle-holder') as HTMLElement
  const skiHolder = document.getElementById('ski-holder') as HTMLElement
  const sunHolder = document.getElementById('sun-holder') as HTMLElement
  const glassesHolder = document.getElementById('glasses-holder') as HTMLElement

  if (glassesHolder && glassesHolder.firstChild) glassesHolder.removeChild(glassesHolder.firstChild)
  if (bandageHolder && bandageHolder.firstChild) bandageHolder.removeChild(bandageHolder.firstChild)
  if (patchHolder && patchHolder.firstChild) patchHolder.removeChild(patchHolder.firstChild)
  if (skiHolder && skiHolder.firstChild) skiHolder.removeChild(skiHolder.firstChild)
  if (sunHolder && sunHolder.firstChild) sunHolder.removeChild(sunHolder.firstChild)
  if (monocleHolder && monocleHolder.firstChild) monocleHolder.removeChild(monocleHolder.firstChild)

  if (path === '/objects/eyewear/Glasses-ColorRound.svg') svg = GlassColor
  if (path === '/objects/eyewear/Glasses-Eyepatch1.svg') svg = GlassEye1
  if (path === '/objects/eyewear/Glasses-Eyepatch2.svg') svg = GlassEye2
  if (path === '/objects/eyewear/Glasses-Heart.svg') svg = GlassHeart
  if (path === '/objects/eyewear/Glasses-Monocle.svg') svg = GlassMono
  if (path === '/objects/eyewear/Glasses-Rectangle.svg') svg = GlassRect
  if (path === '/objects/eyewear/Glasses-Round.svg') svg = GlassRound
  if (path === '/objects/eyewear/Glasses-Shutter.svg') svg = GlassShutter
  if (path === '/objects/eyewear/Glasses-Ski.svg') svg = GlassSki
  if (path === '/objects/eyewear/Glasses-Sun.svg') svg = GlassSun

  if(pathsStore.selectedEyewearPath.includes('Eyepatch1')) {
    holder = bandageHolder
  } else if (pathsStore.selectedEyewearPath.includes('Eyepatch2')) {
    holder = patchHolder
  } else if (pathsStore.selectedEyewearPath.includes('Ski')) {
    holder = skiHolder
  } else if (pathsStore.selectedEyewearPath.includes('Sun')) {
    holder = sunHolder
  } else if (pathsStore.selectedEyewearPath.includes('Monocle')) {
    holder = monocleHolder
  } else {
    holder = glassesHolder
  }

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    holder.append(doc.documentElement)
  }

  // apply color
  const glasses = document.getElementById('glasses-holder') as HTMLElement
  const glassesFill = document.getElementById('glasses-fill') as HTMLElement
  if (glasses && PathsWithSpecialPalette.includes(path)) {
    glasses.style.fill = color.primary as string
  }
  if (glassesFill && PathsWithSpecialPalette.includes(path)) {
    glassesFill.style.fill = color.primary as string
  }
})

// right prop
watch(rightPath, (path) => {
  let svg
  let holder

  const tutuHolder = document.getElementById('tutu-holder') as HTMLElement
  const rightPropHolder = document.getElementById('right-prop-holder') as HTMLElement
  const snowboardHolder = document.getElementById('snowboard-holder') as HTMLElement
  const tennisHolder = document.getElementById('tennis-holder') as HTMLElement
  const laptopHolder = document.getElementById('laptop-holder') as HTMLElement
  const stickHolder = document.getElementById('stick-holder') as HTMLElement
  const swordHolder = document.getElementById('sword-holder') as HTMLElement
  const ulfHolder = document.getElementById('ulf-holder') as HTMLElement
  const backpackHolder = document.getElementById('backpack-holder') as HTMLElement
  const weightsHolder = document.getElementById('weights-holder') as HTMLElement

  if (tutuHolder && tutuHolder.firstChild) tutuHolder.removeChild(tutuHolder.firstChild)
  if (rightPropHolder && rightPropHolder.firstChild) rightPropHolder.removeChild(rightPropHolder.firstChild)
  if (snowboardHolder && snowboardHolder.firstChild) snowboardHolder.removeChild(snowboardHolder.firstChild)
  if (tennisHolder && tennisHolder.firstChild) tennisHolder.removeChild(tennisHolder.firstChild)
  if (laptopHolder && laptopHolder.firstChild) laptopHolder.removeChild(laptopHolder.firstChild)
  if (stickHolder && stickHolder.firstChild) stickHolder.removeChild(stickHolder.firstChild)
  if (swordHolder && swordHolder.firstChild) swordHolder.removeChild(swordHolder.firstChild)
  if (ulfHolder && ulfHolder.firstChild) ulfHolder.removeChild(ulfHolder.firstChild)
  if (backpackHolder && backpackHolder.firstChild) backpackHolder.removeChild(backpackHolder.firstChild)
  if (weightsHolder && weightsHolder.firstChild) weightsHolder.removeChild(weightsHolder.firstChild)

  if(pathsStore.selectedRightPropPath.includes('Tutu')) {
    holder = tutuHolder
  } else if(pathsStore.selectedRightPropPath.includes('Snowboard')) {
    holder = snowboardHolder
  } else if(pathsStore.selectedRightPropPath.includes('Tennis')) {
    holder = tennisHolder
  } else if(pathsStore.selectedRightPropPath.includes('Laptop')) {
    holder = laptopHolder
  } else if(pathsStore.selectedRightPropPath.includes('Backpack')) {
    holder = backpackHolder
  } else if(pathsStore.selectedRightPropPath.includes('Sword')) {
    holder = swordHolder
  } else if(pathsStore.selectedRightPropPath.includes('Weights')) {
    holder = weightsHolder
  } else if(pathsStore.selectedRightPropPath.includes('UlfPlushie')) {
    holder = ulfHolder
  } else if(pathsStore.selectedRightPropPath.includes('HockeyStick')) {
    holder = stickHolder
  } else {
    holder = rightPropHolder
  }

  if (path === '/objects/right/Right-Suitcase.svg') svg = RightSuit
  if (path === '/objects/right/Right-Tutu.svg') svg = RightTutu
  if (path === '/objects/right/Right-Snowboard.svg') svg = RightSnowboard
  if (path === '/objects/right/Right-Laptop.svg') svg = RightLaptop
  if (path === '/objects/right/Right-Tennis.svg') svg = RightTennis
  if (path === '/objects/right/Right-Backpack.svg') svg = RightBackpack
  if (path === '/objects/right/Right-UlfPlushie.svg') svg = RightUlf
  if (path === '/objects/right/Right-Weights.svg') svg = RightWeights
  if (path === '/objects/right/Right-Sword.svg') svg = RightSword
  if (path === '/objects/right/Right-HockeyStick.svg') svg = RightStick

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    holder.append(doc.documentElement)
  }
})

// left prop
watch(leftPath, (path) => {
  let svg
  let holder

  const leftPropHolder = document.getElementById('left-prop-holder') as HTMLElement
  const rodHolder = document.getElementById('rod-holder') as HTMLElement
  const wandHolder = document.getElementById('wand-holder') as HTMLElement
  const phoneHolder = document.getElementById('phone-holder') as HTMLElement
  const staffHolder = document.getElementById('staff-holder') as HTMLElement
  const brushHolder = document.getElementById('brush-holder') as HTMLElement
  const broomHolder = document.getElementById('broom-holder') as HTMLElement
  const skateHolder = document.getElementById('skate-holder') as HTMLElement
  const bookHolder = document.getElementById('book-holder') as HTMLElement
  const gameHolder = document.getElementById('game-holder') as HTMLElement

  if (leftPropHolder && leftPropHolder.firstChild) leftPropHolder.removeChild(leftPropHolder.firstChild)
  if (wandHolder && wandHolder.firstChild) wandHolder.removeChild(wandHolder.firstChild)
  if (rodHolder && rodHolder.firstChild) rodHolder.removeChild(rodHolder.firstChild)
  if (phoneHolder && phoneHolder.firstChild) phoneHolder.removeChild(phoneHolder.firstChild)
  if (staffHolder && staffHolder.firstChild) staffHolder.removeChild(staffHolder.firstChild)
  if (brushHolder && brushHolder.firstChild) brushHolder.removeChild(brushHolder.firstChild)
  if (broomHolder && broomHolder.firstChild) broomHolder.removeChild(broomHolder.firstChild)
  if (skateHolder && skateHolder.firstChild) skateHolder.removeChild(skateHolder.firstChild)
  if (bookHolder && bookHolder.firstChild) bookHolder.removeChild(bookHolder.firstChild)
  if (gameHolder && gameHolder.firstChild) gameHolder.removeChild(gameHolder.firstChild)

  if (path === '/objects/left/Left-Fishing.svg') svg = LeftFishing
  if (path === '/objects/left/Left-Coffee.svg') svg = LeftCoffee
  if (path === '/objects/left/Left-Notebook.svg') svg = LeftNotebook
  if (path === '/objects/left/Left-Broom.svg') svg = LeftBroom
  if (path === '/objects/left/Left-Paintbrush.svg') svg = LeftPaintbrush
  if (path === '/objects/left/Left-Phone.svg') svg = LeftPhone
  if (path === '/objects/left/Left-Skateboard.svg') svg = LeftSkateboard
  if (path === '/objects/left/Left-Staff.svg') svg = LeftStaff
  if (path === '/objects/left/Left-Wand.svg') svg = LeftWand
  if (path === '/objects/left/Left-Book.svg') svg = LeftBook
  if (path === '/objects/left/Left-GameController.svg') svg = LeftGame

  if(pathsStore.selectedLeftPropPath.includes('Fishing')) {
    holder = rodHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Phone')) {
    holder = phoneHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Wand')) {
    holder = wandHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Staff')) {
    holder = staffHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Paintbrush')) {
    holder = brushHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Broom')) {
    holder = broomHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Skateboard')) {
    holder = skateHolder
  } else if (pathsStore.selectedLeftPropPath.includes('GameController')) {
    holder = gameHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Book')) {
    holder = bookHolder
  } else {
    holder = leftPropHolder
  }

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    holder.append(doc.documentElement)
  }
})
</script>

<style scoped lang="scss">
#kiwi-container {
  position: relative;
  height: 100%;
  width: 100%;

  svg {
    display: block;
    width: auto;
    margin: 0 auto;
    height: 100%;
    max-width: 100%;
  }
}
</style>
