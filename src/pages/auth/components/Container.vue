<template>
  <div>
    <v-container fluid class="pa-0 height-100">
      <div class="d-flex align-center height-100">
        <v-row class="h-100">
          <v-col cols="12" md="6" class="d-none d-md-block pa-0">
            <div class="h-100 right-content">
              <div class="container">
                <app-text as="strong" size="4xl" color="white">
                  Veja o que está acontecendo agora
                </app-text>
                <app-text as="strong" size="xl" color="white" weight="semibold">
                  Inscreva-se no Twitter hoje mesmo
                </app-text>

                <img :src="TwitterImage" alt="Twitter" />

                <app-text color="white" as="span" size="sm" class="text-center d-block">
                  © 2023 Twitter, Inc.
                </app-text>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="h-100">
            <div class="container">
              <slot name="content"></slot>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import TwitterImage from '@/assets/ilustrations/ilustration.png'
</script>

<style scoped lang="scss">
.height-100 {
  height: 100vh !important;
}

.container {
  padding: 4.5rem 0 2rem 0;
  height: 100%;
  width: 100%;
  max-width: 670px;
  margin: 0 auto;

  & > * {
    width: 100%;
  }

  @media (max-width: 470px) {
    padding: 4.5rem 1rem 2rem 1rem;
  }
}
.right-content {
  background: rgb(var(--v-theme-primary));
}
</style>
