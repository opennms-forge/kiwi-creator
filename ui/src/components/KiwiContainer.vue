<template>
  <div id="kiwi-container">
  </div>
</template>

<!-- TODO: Rewrite this file -->

<script setup lang="ts">
import { usePathsStore } from '@/store/pathsStore'
import { useSwatchStore } from '@/store/swatchStore'

import LightLogo from '@/assets/objects/background/Logo_White.svg?raw'
import DarkLogo from '@/assets/objects/background/Logo_Black.svg?raw'

import BgBats from '@/assets/objects/background/Bkgd-Bats.svg?raw'
import BgBlank from '@/assets/objects/background/Bkgd-Blank.svg?raw'
import BgDots from '@/assets/objects/background/Bkgd-Dots.svg?raw'
import BgGrid from '@/assets/objects/background/Bkgd-Grid.svg?raw'
import BgSprinkles from '@/assets/objects/background/Bkgd-Sprinkles.svg?raw'
import BgSquiggles from '@/assets/objects/background/Bkgd-Squiggles.svg?raw'
import BgStripes from '@/assets/objects/background/Bkgd-Stripes.svg?raw'
import BgHauntedHouse from '@/assets/objects/background/Scene-HauntedHouse.svg?raw'
import BgSpace from '@/assets/objects/background/Scene-Space.svg?raw'

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
import GlassAlien from '@/assets/objects/eyewear/Glasses-Alien.svg?raw'
import GlassDomino from '@/assets/objects/eyewear/Glasses-DominoMask.svg?raw'

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
import HatAlien from '@/assets/objects/headgear/Hat-AlienAntenna.svg?raw'
import HatCatEars from '@/assets/objects/headgear/Hat-CatEars.svg?raw'
import HatChef from '@/assets/objects/headgear/Hat-Chef.svg?raw'
import HatDevilHorns from '@/assets/objects/headgear/Hat-DevilHorns.svg?raw'
import HatDoctor from '@/assets/objects/headgear/Hat-Doctor.svg?raw'
import HatFirefighter from '@/assets/objects/headgear/Hat-Firefighter.svg?raw'
import HatHornHelmet from '@/assets/objects/headgear/Hat-HornHelmet.svg?raw'
import HatJester from '@/assets/objects/headgear/Hat-Jester.svg?raw'
import HatKitsune from '@/assets/objects/headgear/Hat-Kitsune.svg?raw'
import HatKnight from '@/assets/objects/headgear/Hat-Knight.svg?raw'
import HatNurse from '@/assets/objects/headgear/Hat-Nurse.svg?raw'
import HatNurseBlood from '@/assets/objects/headgear/Hat-Nurse(blood).svg?raw'
import HatPharaoh from '@/assets/objects/headgear/Hat-Pharaoh.svg?raw'
import HatPirate from '@/assets/objects/headgear/Hat-Pirate.svg?raw'
import HatPrincess from '@/assets/objects/headgear/Hat-Princess.svg?raw'
import HatSherlock from '@/assets/objects/headgear/Hat-Sherlock.svg?raw'
import HatTiara from '@/assets/objects/headgear/Hat-Tiara.svg?raw'
import HatWaldo from '@/assets/objects/headgear/Hat-Waldo.svg?raw'

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
import LeftAnkh from '@/assets/objects/left/Left-Ankh.svg?raw'
import LeftCandle from '@/assets/objects/left/Left-Candle.svg?raw'
import LeftClubMate from '@/assets/objects/left/Left-ClubMate.svg?raw'
import LeftFan from '@/assets/objects/left/Left-Fan.svg?raw'
import LeftFireHose from '@/assets/objects/left/Left-FireHose.svg?raw'
import LeftHook from '@/assets/objects/left/Left-Hook.svg?raw'
import LeftJackoLantern from '@/assets/objects/left/Left-JackoLantern.svg?raw'
import LeftLasso from '@/assets/objects/left/Left-Lasso.svg?raw'
import LeftMagnifyingGlass from '@/assets/objects/left/Left-MagnifyingGlass.svg?raw'
import LeftPlayingCards from '@/assets/objects/left/Left-PlayingCards.svg?raw'
import LeftRaygun from '@/assets/objects/left/Left-Raygun.svg?raw'
import LeftShield from '@/assets/objects/left/Left-Shield.svg?raw'
import LeftSkull from '@/assets/objects/left/Left-Skull.svg?raw'
import LeftSyringe from '@/assets/objects/left/Left-Syringe.svg?raw'
import LeftTelescope from '@/assets/objects/left/Left-Telescope.svg?raw'
import LeftWhisk from '@/assets/objects/left/Left-Whisk.svg?raw'

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
import RightAxe from '@/assets/objects/right/Right-Axe.svg?raw'
import RightAxeBlood from '@/assets/objects/right/Right-Axe(blood).svg?raw'
import RightBattleAxe from '@/assets/objects/right/Right-BattleAxe.svg?raw'
import RightBook from '@/assets/objects/right/Right-Book.svg?raw'
import RightCandyBucket from '@/assets/objects/right/Right-CandyBucket.svg?raw'
import RightCatTail from '@/assets/objects/right/Right-CatTail.svg?raw'
import RightKnifeBlood from '@/assets/objects/right/Right-Knife(blood).svg?raw'
import RightPitchfork from '@/assets/objects/right/Right-Pitchfork.svg?raw'
import RightSword2 from '@/assets/objects/right/Right-Sword2.svg?raw'

import NeckBandana from '@/assets/objects/neck/Neck-Bandana.svg?raw'
import NeckBowTie from '@/assets/objects/neck/Neck-BowTie.svg?raw'
import NeckCamera from '@/assets/objects/neck/Neck-Camera.svg?raw'
import NeckPearls from '@/assets/objects/neck/Neck-Pearls.svg?raw'
import NeckScarf1 from '@/assets/objects/neck/Neck-Scarf1.svg?raw'
import NeckScarf2 from '@/assets/objects/neck/Neck-Scarf2.svg?raw'
import NeckScarf3 from '@/assets/objects/neck/Neck-Scarf3.svg?raw'
import NeckTie from '@/assets/objects/neck/Neck-Tie.svg?raw'
import NeckBellCollar from '@/assets/objects/neck/Neck-BellCollar.svg?raw'
import NeckChainMail from '@/assets/objects/neck/Neck-Chainmail.svg?raw'
import NeckChains from '@/assets/objects/neck/Neck-Chains.svg?raw'
import NeckCollar from '@/assets/objects/neck/Neck-Collar.svg?raw'
import NeckCollarBlood from '@/assets/objects/neck/Neck-Collar(blood).svg?raw'
import NeckCowl from '@/assets/objects/neck/Neck-Cowl.svg?raw'
import NeckEgyptianCollar from '@/assets/objects/neck/Neck-EgyptianCollar.svg?raw'
import NeckHandkerchief from '@/assets/objects/neck/Neck-Handkerchief.svg?raw'
import NeckJester from '@/assets/objects/neck/Neck-Jester.svg?raw'
import NeckLongPearls from '@/assets/objects/neck/Neck-LongPearls.svg?raw'
import NeckNeckScarf from '@/assets/objects/neck/Neck-NeckScarf.svg?raw'
import NeckPirateMedalion from '@/assets/objects/neck/Neck-PirateMedalion.svg?raw'
import NeckSpiderWeb from '@/assets/objects/neck/Neck-SpiderWeb.svg?raw'
import NeckStethoscope from '@/assets/objects/neck/Neck-Stethoscope.svg?raw'
import NeckWaldoScarf from '@/assets/objects/neck/Neck-WaldoScarf.svg?raw'


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
const backgroundColor = computed(() => swatchStore.selectedBackgroundSwatch)

// compute paths
const eyePath = computed(() => pathsStore.selectedEyesPath)
const eyewearPath = computed(() => pathsStore.selectedEyewearPath)
const headgearPath = computed(() => pathsStore.selectedHeadgearPath)
const neckPath = computed(() => pathsStore.selectedNeckPath)
const leftPath = computed(() => pathsStore.selectedLeftPropPath)
const rightPath = computed(() => pathsStore.selectedRightPropPath)
const backgroundPath = computed(() => pathsStore.selectedBackgroundPath)
const logoPath = computed(() => pathsStore.selectedLogoPath)

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

// background
watch([backgroundPath, backgroundColor, logoPath], ([path, color, logo]) => {
  let logosvg
  let svg
  const backgroundHolder = document.getElementById('BackgroundHolder') as HTMLElement
  const logoHolder = document.getElementById('LogoHolder') as HTMLElement

  if (backgroundHolder.firstChild) backgroundHolder.removeChild(backgroundHolder.firstChild)
  if (logoHolder.firstChild) logoHolder.removeChild(logoHolder.firstChild)

  if (path === '/objects/background/Bkgd-Bats.svg') svg = BgBats
  if (path === '/objects/background/Bkgd-Blank.svg') svg = BgBlank
  if (path === '/objects/background/Bkgd-Dots.svg') svg = BgDots
  if (path === '/objects/background/Bkgd-Grid.svg') svg = BgGrid
  if (path === '/objects/background/Bkgd-Sprinkles.svg') svg = BgSprinkles
  if (path === '/objects/background/Bkgd-Squiggles.svg') svg = BgSquiggles
  if (path === '/objects/background/Bkgd-Stripes.svg') svg = BgStripes
  if (path === '/objects/background/Scene-HauntedHouse.svg') svg = BgHauntedHouse
  if (path === '/objects/background/Scene-Space.svg') svg = BgSpace

  if (logo === '/objects/background/Logo_White.svg') logosvg = LightLogo
  if (logo === '/objects/background/Logo_Black.svg') logosvg = DarkLogo

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    backgroundHolder.append(doc.documentElement)
  }

  if (svg && logosvg) {
    const doc = parser.parseFromString(logosvg, "image/svg+xml")
    logoHolder.append(doc.documentElement)
  }

    // apply color
  const background = document.getElementById('Bkgd-Blank') as HTMLElement
  if (background && PathsWithSpecialPalette.includes(path)) {
    background.style.fill = color.secondary ? color.secondary : color.primary
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
  const chainHolder = document.getElementById('chain-holder') as HTMLElement
  const chainmailHolder = document.getElementById('chainmail-holder') as HTMLElement
  const collarHolder = document.getElementById('collar-holder') as HTMLElement
  const pharoahHolder = document.getElementById('phar-holder') as HTMLElement
  const kerchiefHolder = document.getElementById('kerchief-holder') as HTMLElement
  const jesterHolder = document.getElementById('jester-holder') as HTMLElement
  const stethoHolder = document.getElementById('stetho-holder') as HTMLElement
  const webHolder = document.getElementById('web-holder') as HTMLElement

  if (neckHolder && neckHolder.firstChild) neckHolder.removeChild(neckHolder.firstChild)
  if (bandanaHolder && bandanaHolder.firstChild) bandanaHolder.removeChild(bandanaHolder.firstChild)
  if (pearlsHolder && pearlsHolder.firstChild) pearlsHolder.removeChild(pearlsHolder.firstChild)
  if (cameraHolder && cameraHolder.firstChild) cameraHolder.removeChild(cameraHolder.firstChild)
  if (scarfHolder && scarfHolder.firstChild) scarfHolder.removeChild(scarfHolder.firstChild)
  if (chainHolder && chainHolder.firstChild) chainHolder.removeChild(chainHolder.firstChild)
  if (chainmailHolder && chainmailHolder.firstChild) chainmailHolder.removeChild(chainmailHolder.firstChild)
  if (collarHolder && collarHolder.firstChild) collarHolder.removeChild(collarHolder.firstChild)
  if (pharoahHolder && pharoahHolder.firstChild) pharoahHolder.removeChild(pharoahHolder.firstChild)
  if (kerchiefHolder && kerchiefHolder.firstChild) kerchiefHolder.removeChild(kerchiefHolder.firstChild)
  if (jesterHolder && jesterHolder.firstChild) jesterHolder.removeChild(jesterHolder.firstChild)
  if (stethoHolder && stethoHolder.firstChild) stethoHolder.removeChild(stethoHolder.firstChild)
  if (webHolder && webHolder.firstChild) webHolder.removeChild(webHolder.firstChild)

  if (path === '/objects/neck/Neck-Bandana.svg') svg = NeckBandana
  if (path === '/objects/neck/Neck-Camera.svg') svg = NeckCamera
  if (path === '/objects/neck/Neck-BowTie.svg') svg = NeckBowTie
  if (path === '/objects/neck/Neck-Pearls.svg') svg = NeckPearls
  if (path === '/objects/neck/Neck-Scarf1.svg') svg = NeckScarf1
  if (path === '/objects/neck/Neck-Scarf2.svg') svg = NeckScarf2
  if (path === '/objects/neck/Neck-Scarf3.svg') svg = NeckScarf3
  if (path === '/objects/neck/Neck-Tie.svg') svg = NeckTie
  if (path === '/objects/neck/Neck-BellCollar.svg') svg = NeckBellCollar
  if (path === '/objects/neck/Neck-Chainmail.svg') svg = NeckChainMail
  if (path === '/objects/neck/Neck-Chains.svg') svg = NeckChains
  if (path === '/objects/neck/Neck-Collar.svg') svg = NeckCollar
  if (path === '/objects/neck/Neck-Collar(blood).svg') svg = NeckCollarBlood
  if (path === '/objects/neck/Neck-Cowl.svg') svg = NeckCowl
  if (path === '/objects/neck/Neck-EgyptianCollar.svg') svg = NeckEgyptianCollar
  if (path === '/objects/neck/Neck-Handkerchief.svg') svg = NeckHandkerchief
  if (path === '/objects/neck/Neck-Jester.svg') svg = NeckJester
  if (path === '/objects/neck/Neck-LongPearls.svg') svg = NeckLongPearls
  if (path === '/objects/neck/Neck-NeckScarf.svg') svg = NeckNeckScarf
  if (path === '/objects/neck/Neck-PirateMedalion.svg') svg = NeckPirateMedalion
  if (path === '/objects/neck/Neck-SpiderWeb.svg') svg = NeckSpiderWeb
  if (path === '/objects/neck/Neck-Stethoscope.svg') svg = NeckStethoscope
  if (path === '/objects/neck/Neck-WaldoScarf.svg') svg = NeckWaldoScarf

  if (pathsStore.selectedNeckPath.includes('Bandana')) {
    holder = bandanaHolder
  } else if (pathsStore.selectedNeckPath.includes('Camera')) {
    holder = cameraHolder
  } else if (pathsStore.selectedNeckPath.includes('Pearls')) {
    holder = pearlsHolder
  } else if (pathsStore.selectedNeckPath.includes('Scarf3')) {
    holder = scarfHolder
  } else if (pathsStore.selectedNeckPath.includes('Chains') || pathsStore.selectedNeckPath.includes('PirateMedalion')) {
    holder = chainHolder
  } else if (pathsStore.selectedNeckPath.includes('Chainmail')) {
    holder = chainmailHolder
  } else if (pathsStore.selectedNeckPath.includes('EgyptianCollar')) {
    holder = pharoahHolder
  } else if (pathsStore.selectedNeckPath.includes('Collar') || pathsStore.selectedNeckPath.includes('Cowl')) {
    holder = collarHolder
  } else if (pathsStore.selectedNeckPath.includes('Handkerchief')) {
    holder = kerchiefHolder
  } else if (pathsStore.selectedNeckPath.includes('Jester')) {
    holder = jesterHolder
  } else if (pathsStore.selectedNeckPath.includes('Stethoscope')) {
    holder = stethoHolder
  } else if (pathsStore.selectedNeckPath.includes('Web')) {
    holder = webHolder
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
  const antennaHolder = document.getElementById('antenna-holder') as HTMLElement
  const catearsHolder = document.getElementById('catears-holder') as HTMLElement
  const chefHolder = document.getElementById('chef-holder') as HTMLElement
  const devilDoctorHolder = document.getElementById('devil_doctor-holder') as HTMLElement
  const firefighterHolder = document.getElementById('firefighter-holder') as HTMLElement
  const hornsHolder = document.getElementById('horns-holder') as HTMLElement
  const knightHolder = document.getElementById('knight-holder') as HTMLElement
  const jesterHolder = document.getElementById('jesterhat-holder') as HTMLElement
  const kitsuneHolder = document.getElementById('kitsune-holder') as HTMLElement
  const nurseHolder = document.getElementById('nurse-holder') as HTMLElement
  const nurseBloodHolder = document.getElementById('nurseblood-holder') as HTMLElement
  const pharHolder = document.getElementById('pharaohhat-holder') as HTMLElement
  const pirateHolder = document.getElementById('piratehat-holder') as HTMLElement
  const princessHolder = document.getElementById('princesshat-holder') as HTMLElement
  const sherlockHolder = document.getElementById('sherlockhat-holder') as HTMLElement
  const tiaraHolder = document.getElementById('tiara-holder') as HTMLElement
  const waldoHolder = document.getElementById('waldohat-holder') as HTMLElement

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
  if (waldoHolder && waldoHolder.firstChild) waldoHolder.removeChild(waldoHolder.firstChild)
  if (tiaraHolder && tiaraHolder.firstChild) tiaraHolder.removeChild(tiaraHolder.firstChild)
  if (sherlockHolder && sherlockHolder.firstChild) sherlockHolder.removeChild(sherlockHolder.firstChild)
  if (princessHolder && princessHolder.firstChild) princessHolder.removeChild(princessHolder.firstChild)
  if (pharHolder && pharHolder.firstChild) pharHolder.removeChild(pharHolder.firstChild)
  if (pirateHolder && pirateHolder.firstChild) pirateHolder.removeChild(pirateHolder.firstChild)
  if (nurseBloodHolder && nurseBloodHolder.firstChild) nurseBloodHolder.removeChild(nurseBloodHolder.firstChild)
  if (nurseHolder && nurseHolder.firstChild) nurseHolder.removeChild(nurseHolder.firstChild)
  if (kitsuneHolder && kitsuneHolder.firstChild) kitsuneHolder.removeChild(kitsuneHolder.firstChild)
  if (jesterHolder && jesterHolder.firstChild) jesterHolder.removeChild(jesterHolder.firstChild)
  if (knightHolder && knightHolder.firstChild) knightHolder.removeChild(knightHolder.firstChild)
  if (devilDoctorHolder && devilDoctorHolder.firstChild) devilDoctorHolder.removeChild(devilDoctorHolder.firstChild)
  if (chefHolder && chefHolder.firstChild) chefHolder.removeChild(chefHolder.firstChild)
  if (firefighterHolder && firefighterHolder.firstChild) firefighterHolder.removeChild(firefighterHolder.firstChild)
  if (catearsHolder && catearsHolder.firstChild) catearsHolder.removeChild(catearsHolder.firstChild)
  if (antennaHolder && antennaHolder.firstChild) antennaHolder.removeChild(antennaHolder.firstChild)
  if (hornsHolder && hornsHolder.firstChild) hornsHolder.removeChild(hornsHolder.firstChild)

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
  if (path === '/objects/headgear/Hat-AlienAntenna.svg') svg = HatAlien
  if (path === '/objects/headgear/Hat-CatEars.svg') svg = HatCatEars
  if (path === '/objects/headgear/Hat-Chef.svg') svg = HatChef
  if (path === '/objects/headgear/Hat-DevilHorns.svg') svg = HatDevilHorns
  if (path === '/objects/headgear/Hat-Doctor.svg') svg = HatDoctor
  if (path === '/objects/headgear/Hat-Firefighter.svg') svg = HatFirefighter
  if (path === '/objects/headgear/Hat-HornHelmet.svg') svg = HatHornHelmet
  if (path === '/objects/headgear/Hat-Jester.svg') svg = HatJester
  if (path === '/objects/headgear/Hat-Kitsune.svg') svg = HatKitsune
  if (path === '/objects/headgear/Hat-Knight.svg') svg = HatKnight
  if (path === '/objects/headgear/Hat-Nurse.svg') svg = HatNurse
  if (path === '/objects/headgear/Hat-Nurse(blood).svg') svg = HatNurseBlood
  if (path === '/objects/headgear/Hat-Pharaoh.svg') svg = HatPharaoh
  if (path === '/objects/headgear/Hat-Pirate.svg') svg = HatPirate
  if (path === '/objects/headgear/Hat-Princess.svg') svg = HatPrincess
  if (path === '/objects/headgear/Hat-Sherlock.svg') svg = HatSherlock
  if (path === '/objects/headgear/Hat-Tiara.svg') svg = HatTiara
  if (path === '/objects/headgear/Hat-Waldo.svg') svg = HatWaldo

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
  } else if (pathsStore.selectedHeadgearPath.includes('Antenna')) {
    holder = antennaHolder
  } else if (pathsStore.selectedHeadgearPath.includes('CatEars')) {
    holder = catearsHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Chef')) {
    holder = chefHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Devil') || pathsStore.selectedHeadgearPath.includes('Doctor')) {
    holder = devilDoctorHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Firefighter')) {
    holder = firefighterHolder
  } else if (pathsStore.selectedHeadgearPath.includes('HornHelmet')) {
    holder = hornsHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Jester')) {
    holder = jesterHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Kitsune')) {
    holder = kitsuneHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Knight')) {
    holder = knightHolder
  } else if (pathsStore.selectedHeadgearPath.includes('blood')) {
    holder = nurseBloodHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Nurse')) {
    holder = nurseHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Pharaoh')) {
    holder = pharHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Pirate')) {
    holder = pirateHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Princess')) {
    holder = princessHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Sherlock')) {
    holder = sherlockHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Tiara')) {
    holder = tiaraHolder
  } else if (pathsStore.selectedHeadgearPath.includes('Waldo')) {
    holder = waldoHolder
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
  const alienHolder = document.getElementById('alien-holder') as HTMLElement
  const dominoHolder = document.getElementById('domino-holder') as HTMLElement
  const glassesHolder = document.getElementById('glasses-holder') as HTMLElement

  if (glassesHolder && glassesHolder.firstChild) glassesHolder.removeChild(glassesHolder.firstChild)
  if (bandageHolder && bandageHolder.firstChild) bandageHolder.removeChild(bandageHolder.firstChild)
  if (patchHolder && patchHolder.firstChild) patchHolder.removeChild(patchHolder.firstChild)
  if (skiHolder && skiHolder.firstChild) skiHolder.removeChild(skiHolder.firstChild)
  if (sunHolder && sunHolder.firstChild) sunHolder.removeChild(sunHolder.firstChild)
  if (monocleHolder && monocleHolder.firstChild) monocleHolder.removeChild(monocleHolder.firstChild)
  if (alienHolder && alienHolder.firstChild) alienHolder.removeChild(alienHolder.firstChild)
  if (dominoHolder && dominoHolder.firstChild) dominoHolder.removeChild(dominoHolder.firstChild)

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
  if (path === '/objects/eyewear/Glasses-Alien.svg') svg = GlassAlien
  if (path === '/objects/eyewear/Glasses-DominoMask.svg') svg = GlassDomino

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
  } else if (pathsStore.selectedEyewearPath.includes('Alien')) {
    holder = alienHolder
  } else if (pathsStore.selectedEyewearPath.includes('Domino')) {
    holder = dominoHolder
  } else {
    holder = glassesHolder
  }

  if (svg) {
    const doc = parser.parseFromString(svg, "image/svg+xml")
    holder.append(doc.documentElement)
  }

  // hide eyes if alien selected
  const eyeHolder = document.getElementById('eyes-holder')
  if (path === '/objects/eyewear/Glasses-Alien.svg') {
    if (eyeHolder) eyeHolder.style.display = 'none'
  } else {
    if (eyeHolder) eyeHolder.style.display = 'block'
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
  const axeHolder = document.getElementById('axe-holder') as HTMLElement
  const battleAxeHolder = document.getElementById('battleaxe-holder') as HTMLElement
  const sword2Holder = document.getElementById('sword2-holder') as HTMLElement
  const bookHolder = document.getElementById('right-book-holder') as HTMLElement
  const bucketHolder = document.getElementById('bucket-holder') as HTMLElement
  const catTailHolder = document.getElementById('cat-tail-holder') as HTMLElement
  const knifeHolder = document.getElementById('knife-holder') as HTMLElement
  const pitchforkHolder = document.getElementById('pitchfork-holder') as HTMLElement

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
  if (axeHolder && axeHolder.firstChild) axeHolder.removeChild(axeHolder.firstChild)
  if (battleAxeHolder && battleAxeHolder.firstChild) battleAxeHolder.removeChild(battleAxeHolder.firstChild)
  if (sword2Holder && sword2Holder.firstChild) sword2Holder.removeChild(sword2Holder.firstChild)
  if (bookHolder && bookHolder.firstChild) bookHolder.removeChild(bookHolder.firstChild)
  if (catTailHolder && catTailHolder.firstChild) catTailHolder.removeChild(catTailHolder.firstChild)
  if (bucketHolder && bucketHolder.firstChild) bucketHolder.removeChild(bucketHolder.firstChild)
  if (knifeHolder && knifeHolder.firstChild) knifeHolder.removeChild(knifeHolder.firstChild)
  if (pitchforkHolder && pitchforkHolder.firstChild) pitchforkHolder.removeChild(pitchforkHolder.firstChild)

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
  } else if(pathsStore.selectedRightPropPath.includes('BattleAxe')) {
    holder = battleAxeHolder
  } else if(pathsStore.selectedRightPropPath.includes('Axe')) {
    holder = axeHolder
  } else if(pathsStore.selectedRightPropPath.includes('Book')) {
    holder = bookHolder
  } else if(pathsStore.selectedRightPropPath.includes('Bucket')) {
    holder = bucketHolder
  } else if(pathsStore.selectedRightPropPath.includes('CatTail')) {
    holder = catTailHolder
  } else if(pathsStore.selectedRightPropPath.includes('Knife')) {
    holder = knifeHolder
  } else if(pathsStore.selectedRightPropPath.includes('Pitchfork')) {
    holder = pitchforkHolder
  } else if(pathsStore.selectedRightPropPath.includes('Sword2')) {
    holder = sword2Holder
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
  if (path === '/objects/right/Right-Axe.svg') svg = RightAxe
  if (path === '/objects/right/Right-Axe(blood).svg') svg = RightAxeBlood
  if (path === '/objects/right/Right-BattleAxe.svg') svg = RightBattleAxe
  if (path === '/objects/right/Right-Book.svg') svg = RightBook
  if (path === '/objects/right/Right-CandyBucket.svg') svg = RightCandyBucket
  if (path === '/objects/right/Right-CatTail.svg') svg = RightCatTail
  if (path === '/objects/right/Right-Knife(blood).svg') svg = RightKnifeBlood
  if (path === '/objects/right/Right-Pitchfork.svg') svg = RightPitchfork
  if (path === '/objects/right/Right-Sword2.svg') svg = RightSword2

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
  const ankhHolder = document.getElementById('ankh-holder') as HTMLElement
  const beerHolder = document.getElementById('beer-holder') as HTMLElement
  const candleHolder = document.getElementById('candle-holder') as HTMLElement
  const fanHolder = document.getElementById('fan-holder') as HTMLElement
  const firehoseHolder = document.getElementById('firehose-holder') as HTMLElement
  const hookHolder = document.getElementById('hook-holder') as HTMLElement
  const pumpkinHolder = document.getElementById('pumpkin-holder') as HTMLElement
  const lassoHolder = document.getElementById('lasso-holder') as HTMLElement
  const glassHolder = document.getElementById('glass-holder') as HTMLElement
  const cardsHolder = document.getElementById('cards-holder') as HTMLElement
  const gunHolder = document.getElementById('gun-holder') as HTMLElement
  const shieldHolder = document.getElementById('shield-holder') as HTMLElement
  const skullHolder = document.getElementById('skull-holder') as HTMLElement
  const syringeHolder = document.getElementById('syringe-holder') as HTMLElement
  const telescopeHolder = document.getElementById('telescope-holder') as HTMLElement
  const whiskHolder = document.getElementById('whisk-holder') as HTMLElement

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
  if (ankhHolder && ankhHolder.firstChild) ankhHolder.removeChild(ankhHolder.firstChild)
  if (beerHolder && beerHolder.firstChild) beerHolder.removeChild(beerHolder.firstChild)
  if (candleHolder && candleHolder.firstChild) candleHolder.removeChild(candleHolder.firstChild)
  if (fanHolder && fanHolder.firstChild) fanHolder.removeChild(fanHolder.firstChild)
  if (firehoseHolder && firehoseHolder.firstChild) firehoseHolder.removeChild(firehoseHolder.firstChild)
  if (hookHolder && hookHolder.firstChild) hookHolder.removeChild(hookHolder.firstChild)
  if (pumpkinHolder && pumpkinHolder.firstChild) pumpkinHolder.removeChild(pumpkinHolder.firstChild)
  if (lassoHolder && lassoHolder.firstChild) lassoHolder.removeChild(lassoHolder.firstChild)
  if (glassHolder && glassHolder.firstChild) glassHolder.removeChild(glassHolder.firstChild)
  if (cardsHolder && cardsHolder.firstChild) cardsHolder.removeChild(cardsHolder.firstChild)
  if (gunHolder && gunHolder.firstChild) gunHolder.removeChild(gunHolder.firstChild)
  if (shieldHolder && shieldHolder.firstChild) shieldHolder.removeChild(shieldHolder.firstChild)
  if (skullHolder && skullHolder.firstChild) skullHolder.removeChild(skullHolder.firstChild)
  if (syringeHolder && syringeHolder.firstChild) syringeHolder.removeChild(syringeHolder.firstChild)
  if (telescopeHolder && telescopeHolder.firstChild) telescopeHolder.removeChild(telescopeHolder.firstChild)
  if (whiskHolder && whiskHolder.firstChild) whiskHolder.removeChild(whiskHolder.firstChild)

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
  if (path === '/objects/left/Left-Ankh.svg') svg = LeftAnkh
  if (path === '/objects/left/Left-Candle.svg') svg = LeftCandle
  if (path === '/objects/left/Left-ClubMate.svg') svg = LeftClubMate
  if (path === '/objects/left/Left-Fan.svg') svg = LeftFan
  if (path === '/objects/left/Left-FireHose.svg') svg = LeftFireHose
  if (path === '/objects/left/Left-Hook.svg') svg = LeftHook
  if (path === '/objects/left/Left-JackoLantern.svg') svg = LeftJackoLantern
  if (path === '/objects/left/Left-Lasso.svg') svg = LeftLasso
  if (path === '/objects/left/Left-MagnifyingGlass.svg') svg = LeftMagnifyingGlass
  if (path === '/objects/left/Left-PlayingCards.svg') svg = LeftPlayingCards
  if (path === '/objects/left/Left-Raygun.svg') svg = LeftRaygun
  if (path === '/objects/left/Left-Shield.svg') svg = LeftShield
  if (path === '/objects/left/Left-Skull.svg') svg = LeftSkull
  if (path === '/objects/left/Left-Syringe.svg') svg = LeftSyringe
  if (path === '/objects/left/Left-Telescope.svg') svg = LeftTelescope
  if (path === '/objects/left/Left-Whisk.svg') svg = LeftWhisk

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
  } else if (pathsStore.selectedLeftPropPath.includes('Ankh')) {
    holder = ankhHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Candle')) {
    holder = candleHolder
  } else if (pathsStore.selectedLeftPropPath.includes('ClubMate')) {
    holder = beerHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Fan')) {
    holder = fanHolder
  } else if (pathsStore.selectedLeftPropPath.includes('FireHose')) {
    holder = firehoseHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Hook')) {
    holder = hookHolder
  } else if (pathsStore.selectedLeftPropPath.includes('JackoLantern')) {
    holder = pumpkinHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Lasso')) {
    holder = lassoHolder
  } else if (pathsStore.selectedLeftPropPath.includes('MagnifyingGlass')) {
    holder = glassHolder
  } else if (pathsStore.selectedLeftPropPath.includes('PlayingCards')) {
    holder = cardsHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Raygun')) {
    holder = gunHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Shield')) {
    holder = shieldHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Skull')) {
    holder = skullHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Syringe')) {
    holder = syringeHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Telescope')) {
    holder = telescopeHolder
  } else if (pathsStore.selectedLeftPropPath.includes('Whisk')) {
    holder = whiskHolder
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
