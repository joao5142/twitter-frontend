<template>
  <aside class="d-flex flex-column justify-space-between container">
    <div>
      <ul class="nav">
        <li><img class="nav__logo" :src="TwitterLogoImage" alt="Logo" /></li>
        <li class="nav__item">
          <ph-hash :size="25" :color="text900" />
          <app-text as="strong" size="lg">Explore</app-text>
        </li>
        <li class="nav__item">
          <ph-bell :size="25" :color="text900" />
          <app-text as="strong" size="lg">Notifications</app-text>
        </li>
        <li class="nav__item">
          <ph-envelope-simple :size="25" :color="text900" />
          <app-text as="strong" size="lg">Messages</app-text>
        </li>

        <li class="nav__item">
          <ph-bookmark-simple :size="25" :color="text900" />
          <app-text as="strong" size="lg">Bookmarks</app-text>
        </li>

        <li class="nav__item">
          <ph-file-text :size="25" :color="text900" />
          <app-text as="strong" size="lg">Lists</app-text>
        </li>

        <li class="nav__item">
          <ph-user :size="25" :color="text900" />
          <app-text as="strong" size="lg">Profile</app-text>
        </li>

        <li class="nav__item">
          <ph-dots-three-circle :size="25" :color="text900" />
          <app-text as="strong" size="lg">More</app-text>
        </li>
      </ul>
      <app-button pill class="mt-10 btn-100">Tweet</app-button>
    </div>
    <div class="d-flex justify-space-between h-auto align-center settings">
      <div class="d-flex align-center gap-10">
        <app-avatar
          class="cursor-pointer"
          mode="image"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          @click="$router.push('/app/perfil/joao')"
        />
        <div>
          <app-text class="d-block" as="strong">João Paulo</app-text>
          <app-text as="span" color="text-600">@joaopaulo</app-text>
        </div>
      </div>

      <v-menu>
        <template #activator="{ props }">
          <ph-dots-three
            v-bind="props"
            class="cursor-pointer"
            size="28"
            weight="regular"
            :color="text900"
          />
        </template>
        <app-box class="pa-4">
          <div class="d-flex align-center gap-5 cursor-pointer" @click="handleSetTheme">
            <app-text>Toggle theme</app-text>
            <ph-moon v-if="selectedTheme == 'light'" />
            <ph-sun v-else />
          </div>
          <div class="separator-bottom my-3"></div>

          <div class="d-flex align-center gap-5 cursor-pointer" @click="handleLogout">
            <app-text>Logout</app-text>
            <ph-sign-out />
          </div>
        </app-box>
      </v-menu>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {
  PhHash,
  PhBell,
  PhEnvelopeSimple,
  PhBookmarkSimple,
  PhFileText,
  PhUser,
  PhDotsThreeCircle,
  PhDotsThree,
  PhMoon,
  PhSun,
  PhSignOut,
} from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'
import TwitterLogoImage from '@/assets/icons/logo.png'
const router = useRouter()
const { setTheme, selectedTheme } = useToggleTheme()
const theme = useTheme()

const text900 = computed(() => {
  return theme.current.value.colors['text-900']
})
function handleSetTheme() {
  if (selectedTheme.value === 'dark') {
    setTheme('light')
  } else {
    setTheme('dark')
  }
}

function handleLogout() {
  router.push({ path: '/auth/login' })
  setTheme('light')
}
</script>

<style scoped lang="scss">
.container {
  width: 300px;

  height: 100%;

  position: fixed;
  padding-bottom: 10px;
  flex-grow: 1;

  @media (max-width: 1500px) {
    & {
      display: none;
      position: relative;
    }
  }
}
.settings {
  margin-bottom: 0px;

  @media (min-height: 850px) {
    margin-bottom: 20px;
  }
}
.nav {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  &__logo {
    width: 35px;
    height: 25px;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.btn-100 {
  width: 100%;
}
</style>
