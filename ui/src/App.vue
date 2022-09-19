

<template>
  <FeatherAppLayout class="feather-styles" contentLayout="full">
    <template v-slot:header>
      <Menubar />
    </template>
    <span id="bg-area"></span>

    <div class="app-main-content">
      <!-- Left Slider -->
      <AttributeButtons />

      <!-- SVG -->
      <div class="svg-btns">
        <KiwiContainer />
        <ActionButtons />
      </div>

      <!-- Right sliders -->
      <div class="right-sliders">
        <ColorCarousel />
        <ObjectsCarousel />
      </div>
    </div>
  </FeatherAppLayout>
  <ConfirmClearDialog />
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import "@featherds/styles/themes/open-mixins";

html {
  height: 100%;
  overflow: hidden;
}

body {
  @include open-light;
  margin: 0;

  .app-content-container {
    position: relative;
  }

  #bg-area {
    height: 60%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    background: rgb(255,255,255);
    background: linear-gradient(146deg, rgba(255,255,255,0.15) 3%, rgba(0,146,199,0.15) 15%, rgba(20,209,223,0.15) 29%, rgba(166,162,203,0.15) 48%, rgba(251,135,191,0.15) 69%, rgba(255,255,255,0.15) 97%);

    opacity: 1;
    z-index: -1;
    -webkit-transition: opacity .4s ease;
    transition: opacity .4s ease;
  }

  .app-bar {
    .logo {
      width: 8em !important;
    }
  }

  .app-main-content {
    display: flex;
    height: calc(100vh - 70px);
    width: 100%;
    padding: 4em;
    padding-top: 0px;
    justify-content: space-between;

    .svg-btns {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      align-items: center;
      height: calc(100vh - 134px);
    }

    .right-sliders {
      display: flex;
      justify-content: flex-end;
      width: 190px;
      min-width: 190px;
      max-height: 720px;
      padding-top: 50px;
    }
  }
}
</style>
