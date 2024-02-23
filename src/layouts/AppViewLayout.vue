<template>
  <div class="content">
    <div class="d-flex justify-end pa-4 pb-0 menu">
      <ph-list
        v-if="!isMenuOpen"
        class="cursor-pointer"
        :color="black900"
        size="28"
        @click="isMenuOpen = true"
      />

      <ph-x v-else class="cursor-pointer" :color="black900" size="28" @click="isMenuOpen = false" />
    </div>

    <div
      class="aside-explore d-flex justify-end pa-4 pb-0"
      :class="{ 'aside-explore--open': isMenuOpen }"
    >
      <explore-aside />
    </div>
    <main class="py-4 main"><slot></slot></main>

    <aside-news class="pa-4" />

    <app-loading v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { PhList, PhX } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import ExploreAside from '@/components/pages/app/ExploreAside.vue'
import AsideNews from '@/components/pages/app/AsideNews.vue'

const { isLoading } = useLoadingIndicator()

const isMenuOpen = ref<boolean>(false)

const theme = useTheme()
const black900 = computed(() => {
  return theme.current.value.colors['text-900']
})

watch(isMenuOpen, (value) => {
  if (value) {
    document.querySelector('html')?.classList.add('scroll-hidden')
  } else {
    document.querySelector('html')?.classList.remove('scroll-hidden')
  }
})

onBeforeRouteLeave(() => {
  document.querySelector('html')?.classList.remove('scroll-hidden')
})

onUnmounted(() => {
  document.querySelector('html')?.classList.remove('scroll-hidden')
})
</script>

<style scoped lang="scss">
@use '@/styles/_mixins.scss' as mixins;
.content {
  display: grid;
  grid-template-columns: 300px 1fr 350px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
}

.main {
  border-inline: 1px solid rgb(var(--v-theme-gray-100));
}

.menu {
  @media (min-width: 850px) {
    display: none !important;
  }
}
.aside-explore {
  isolation: isolate;

  height: 100vh;
  height: 100dvh;
  height: -webkit-fill-available;

  padding-bottom: 10px;

  @media (max-width: 850px) {
    &:not(.aside-explore--open) {
      display: none !important;
    }
    &.aside-explore--open {
      height: calc(100vh - 60px);
      height: calc(100dvh - 60px);
    }
  }

  @include mixins.scrollStyles();

  @media (max-width: 450px) {
    padding-right: 10px;
  }
}
</style>
