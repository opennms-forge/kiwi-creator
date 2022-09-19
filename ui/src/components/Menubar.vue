<template>
  <FeatherAppBar :labels="{ skip: 'main' }" content="app">
    <template v-slot:left>
      <FeatherAppBarLink 
        class="app-bar" 
        :icon="Logo" 
        title="Home" 
        type="home" 
        url="/" 
      />

      <div class="title">
        <span class="pipe">|</span>
        <span class="my"> my</span>Kiwi
      </div>
    </template>
  </FeatherAppBar>
</template>
    
<script setup lang="ts">
import Logo from '@/assets/Logo.vue'
</script>

<style scoped lang="scss">
@import "@featherds/styles/mixins/typography";
@import "@featherds/styles/themes/variables";

.title {
  @include headline3;
  color: var($primary-text-on-color);
  margin: 0px 0px 4px 12px;
  cursor: pointer;

  .pipe{
    margin-right: 12px;
  }

  .my {
    @include subtitle1;
    color: var($primary-text-on-color);
  }
}
</style>

  