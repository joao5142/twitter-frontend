<template>
  <div class="avatar" :class="`${widthClass} ${heightClass} ${computedBorderColor}`">
    <app-text
      v-if="mode === 'text'"
      data-test="app-avatar-text"
      class="d-flex justify-center align-center"
      size="xl"
      color="gray-800"
      weight="semibold"
      as="span"
    >
      {{ text }}
    </app-text>

    <v-img
      v-else
      data-test="app-avatar-image"
      class="avatar__img"
      width="100%"
      height="100%"
      cover
      :src="src"
    ></v-img>
  </div>
</template>

<script setup lang="ts">
import { ColorTypes } from '@/plugins/vuetify'

interface IProps {
  text?: string
  borderColor: ColorTypes
  size?: string | number
  mode: 'text' | 'image'
  src?: string
}
const props = withDefaults(defineProps<IProps>(), {
  isOnline: false,
  mode: 'text',
  borderColor: 'gray-100',
})

const widthClass = computed(() => {
  if (props.size !== undefined) {
    return 'avatar--width'
  }
})

const heightClass = computed(() => {
  if (props.size !== undefined) {
    return 'avatar--height'
  }
})

const computedWidthUnit = computed(() => {
  return `${props.size}px`
})
const computedHeightUnit = computed(() => {
  return `${props.size}px`
})
const computedBorderColor = computed(() => {
  return `border-${props.borderColor}`
})
</script>

<style scoped lang="scss">
.avatar {
  height: 3.5rem;
  width: 3.5rem;
  min-width: 3.5rem;
  min-height: 3.5rem;

  background: rgb(var(--v-theme-gray-300));

  border-radius: 100px;
  border: 3px solid rgb(var(--v-border-color));

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &__img {
    border-radius: inherit;
  }

  &--online {
    position: absolute;

    right: -5%;
    bottom: -2%;

    width: 1rem;
    height: 1rem;

    background: rgb(var(--v-theme-green-300));

    border-radius: 50%;
    border: 2px solid white;
  }

  &--width {
    width: v-bind(computedWidthUnit);
    min-width: v-bind(computedWidthUnit);
  }
  &--height {
    height: v-bind(computedHeightUnit);
    min-height: v-bind(computedHeightUnit);
  }
}
</style>
