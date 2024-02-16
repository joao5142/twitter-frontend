<template>
  <div class="me-7 content">
    <header class="d-flex justify-space-between align-center px-4 py-2">
      <app-text as="strong" size="lg">Home</app-text>
      <ph-sparkle size="27" :color="primary" />
    </header>
    <div class="separator-bottom"></div>
    <div class="d-flex px-4 py-3">
      <app-avatar
        class="cursor-pointer"
        border-color="white"
        mode="image"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        @click="$router.push('/app/perfil/joao')"
      />

      <div class="flex-grow-1 ms-2">
        <input class="search" type="text" placeholder="What’s happening?" />

        <div class="d-flex flex-wrap gap-20 justify-space-between align-center mt-10">
          <div class="d-flex gap-20">
            <ph-image size="30" :color="primary" />
            <ph-chart-bar-horizontal size="30" :color="primary" />
            <ph-smiley size="30" :color="primary" />
            <ph-calendar size="30" :color="primary" />
          </div>
          <app-button class="py-2 px-4" pill>Tweet</app-button>
        </div>
      </div>
    </div>
    <div class="separator-bottom"></div>

    <div>
      <app-post class="pa-4" @click="$router.push('/app/perfil/joao')"></app-post>
      <div class="separator-bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhSparkle, PhImage, PhChartBarHorizontal, PhSmiley, PhCalendar } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

definePageMeta({
  name: 'Home',
  layout: 'app-view-layout',
})

const theme = useTheme()

const { primary } = theme.current.value.colors
</script>

<style scoped lang="scss">
.search {
  outline: 0;

  border: 0;
  width: 100%;
  height: 30px;

  margin-top: 0.4rem;

  font-size: 1.2rem;

  &::placeholder {
    font-size: 1.2rem;
    font-weight: var(--app-font-weight-medium);
  }
}
</style>
