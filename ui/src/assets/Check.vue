<template>
  <div class="check">
    <Check />
  </div>
</template>

<script setup lang=ts>
import Check from './check.svg'
</script>

<style scoped lang="scss">
@import "@featherds/styles/themes/variables";
.check {
  color: var($primary-text-on-color) !important;
  margin-left: 11px;
  margin-top: 7px;
}
</style>
