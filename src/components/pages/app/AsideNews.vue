<template>
  <aside class="container">
    <v-text-field
      id="email"
      v-model="searchInput.value"
      rounded
      placeholder="Search Twitter"
      :error-messages="searchInput.error_messages"
    >
      <template #prepend-inner>
        <ph-magnifying-glass class="me-3" :color="gray600" size="20" />
      </template>
    </v-text-field>

    <app-box background="gray-100" class="py-4">
      <app-text as="strong" size="lg" class="d-block px-4 mb-3">What’s happening</app-text>

      <div class="separator-bottom"></div>

      <div v-for="(item, index) in 2" :key="'news' + index">
        <div class="px-4 py-3">
          <app-text weight="medium" size="sm" color="text-600">COVID19 . Last night</app-text>

          <app-text class="my-2" as="p" color="text-900" weight="semibold">
            England’s Chief Medical Officer says the UK is at the most dangerous time of the
            pandemic
          </app-text>

          <app-text as="span" weight="medium" size="sm" color="text-600">
            Trending with
            <app-text as="span" color="primary">#covid19</app-text>
          </app-text>
        </div>
        <div class="separator-bottom"></div>
      </div>

      <app-text class="px-4 mt-4 d-block" as="span" color="primary" weight="semibold">
        Show more
      </app-text>
    </app-box>

    <app-box background="gray-100" class="py-4 mt-5">
      <app-text as="strong" size="lg" class="d-block px-4 mb-3">Who to follow</app-text>

      <div class="separator-bottom"></div>

      <div v-for="(item, index) in 4" :key="'news' + index">
        <div class="px-4 py-3 d-flex align-center justify-space-between">
          <div class="d-flex align-center gap-10">
            <app-avatar
              mode="image"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div>
              <app-text class="d-block" as="strong">João Paulo</app-text>
              <app-text as="span" color="text-600">@joaopaulo</app-text>
            </div>
          </div>

          <app-button pill :outlined="true" class="py-1" border-color="primary">
            <app-text as="strong" color="primary" weight="semibold">Follow</app-text>
          </app-button>
        </div>
        <div class="separator-bottom"></div>
      </div>

      <app-text class="px-4 mt-4 d-block" as="span" color="primary" weight="semibold">
        Show more
      </app-text>
    </app-box>

    <app-text as="p" color="text-600" size="sm" class="mt-5" weight="medium">
      Terms of Service Privacy Policy Cookie Policy Ads info More © 2021 Twitter, Inc.
    </app-text>
  </aside>
</template>

<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

const searchInput = reactive({
  value: '',
  error_messages: [],
})

const theme = useTheme()

const { 'gray-600': gray600 } = theme.current.value.colors
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}
</style>
