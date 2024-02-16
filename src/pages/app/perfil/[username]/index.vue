<template>
  <div>
    <header class="d-flex align-center gap-30 py-3 px-4">
      <ph-arrow-left
        class="cursor-pointer"
        size="30"
        :color="primary"
        @click="$router.push('/app/home')"
      />
      <div>
        <app-text class="d-block" as="strong" size="lg">João</app-text>
        <app-text as="span" size="sm" color="subtitle">5 tweets</app-text>
      </div>
    </header>
    <div class="separator-bottom"></div>
    <v-img
      cover
      min-height="200px"
      max-height="300px"
      class="perfil-img"
      lazy-src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ></v-img>

    <div class="content px-4">
      <div class="d-flex align-center justify-space-between">
        <div>
          <app-avatar
            size="136"
            mode="image"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <app-text class="d-block" as="strong" size="xl">João Paulo</app-text>
          <app-text as="span" color="text-600">@joaopaulo</app-text>
          <app-text class="d-block my-2" as="span" color="text-900" weight="semibold">
            Desenvolvedor front-end
          </app-text>
        </div>
        <app-button v-if="smAndUp" pill outlined border-color="primary" class="py-2">
          <app-text as="strong" color="primary" weight="semibold">Edit Profile</app-text>
        </app-button>
      </div>
      <div class="d-flex flex-wrap align-center gap-30 mb-3">
        <div class="d-flex align-center gap-10">
          <ph-map-pin weight="regular" size="26" :color="gray500" />
          <app-text as="strong" color="text-500" weight="bold">Itambé</app-text>
        </div>
        <div class="d-flex align-center gap-10">
          <ph-calendar weight="regular" size="26" :color="gray500" />
          <app-text as="strong" color="text-500" weight="bold">Joined September 2011</app-text>
        </div>
      </div>

      <div class="d-flex align-center gap-30">
        <app-text as="strong" weight="bold">
          200
          <app-text as="span" weight="medium" color="text-500">Following</app-text>
        </app-text>

        <app-text as="strong" weight="bold">
          70
          <app-text as="span" weight="medium" color="text-500">Followers</app-text>
        </app-text>
      </div>
    </div>

    <v-tabs v-model="selectedTab" grow stacked>
      <v-tab>
        <app-text class="mt-2" as="strong" color="text-500">Tweets</app-text>
      </v-tab>
      <v-tab>
        <app-text class="mt-2" as="strong" color="text-500">Tweets & replies</app-text>
      </v-tab>
      <v-tab>
        <app-text class="mt-2" as="strong" color="text-500">Media</app-text>
      </v-tab>

      <v-tab>
        <app-text class="mt-2" as="strong" color="text-500">Likes</app-text>
      </v-tab>
    </v-tabs>

    <div class="separator-bottom"></div>

    <div>
      <app-post class="pa-4"></app-post>
      <div class="separator-bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowLeft, PhMapPin, PhCalendar } from '@phosphor-icons/vue'
import { useTheme, useDisplay } from 'vuetify'

definePageMeta({
  layout: 'app-view-layout',
})
useHead({ title: 'Perfil' })

const { smAndUp } = useDisplay()
const selectedTab = ref<number>(0)

const theme = useTheme()
const { primary, 'gray-500': gray500 } = theme.current.value.colors
</script>

<style scoped lang="scss">
.content {
  margin-top: -80px;
}
</style>
