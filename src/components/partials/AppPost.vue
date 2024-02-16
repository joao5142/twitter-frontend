<template>
  <article class="d-flex gap-10">
    <app-avatar
      class="cursor-pointer"
      mode="image"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <div class="flex-grow-1">
      <div class="d-flex gap-10">
        <app-text as="strong" color="text-800">Devon Lane</app-text>
        <app-text as="span" color="text-500">@johndue</app-text>
        <time datetime="2023-10-5" class="text-gray-500 app-font-weight-medium">23s</time>
      </div>

      <app-text as="p" weight="medium" color="text-900">Tom is in a big hurry.</app-text>
      <img
        class="post__image"
        lazy-src="https://images.unsplash.com/photo-1582746652442-5ee61e88b27d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="https://images.unsplash.com/photo-1582746652442-5ee61e88b27d?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div class="d-flex justify-space-between align-center mt-3 my-4">
        <div class="d-flex align-center gap-5">
          <ph-chat-circle size="25" :color="gray500" />
          <app-text as="span" weight="medium" color="text-500">61</app-text>
        </div>
        <div class="d-flex align-center gap-5">
          <ph-share-fat size="25" :color="gray500" />
          <app-text as="span" weight="medium" color="text-500">61</app-text>
        </div>
        <div class="d-flex align-center gap-5">
          <ph-heart size="25" :color="gray500" />
          <app-text as="span" weight="medium" color="text-500">61</app-text>
        </div>

        <div class="d-flex align-center gap-5">
          <ph-upload-simple size="25" :color="gray500" />
          <app-text as="span" weight="medium" color="text-500">61</app-text>
        </div>
      </div>

      <a href="" class="text-decoration-none">
        <app-text as="span" weight="medium" color="primary">Show this thread</app-text>
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { PhChatCircle, PhShareFat, PhHeart, PhUploadSimple } from '@phosphor-icons/vue'

import { useTheme } from 'vuetify'

const theme = useTheme()

const { 'gray-500': gray500 } = theme.current.value.colors
</script>

<style scoped lang="scss">
.post {
  &__image {
    width: 100%;
    min-height: 350px;
    max-height: 400px;

    border-radius: 15px;

    margin-top: 10px;

    @media (max-width: 500px) {
      & {
        max-height: 200px;
        min-height: 200px;
      }
    }
  }
}
</style>
