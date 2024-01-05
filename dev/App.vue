<template>
  <div class="layout">
    <main class="grey light-4">
      <div class="container mt-5">
        <vue-slider-range class="cursor-pointer" :data="diskData" v-model="diskValue"></vue-slider-range>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const diskData = ref([2, 3, 4, 5]);

const diskValue = ref(3);
</script>

<style lang="scss">
@import '@/theme/material';
</style>
