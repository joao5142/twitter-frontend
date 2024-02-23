<template>
  <container>
    <template #content>
      <div class="container d-flex flex-column justify-space-between h-100">
        <div>
          <div class="d-flex justify-space-between align-center">
            <img :src="TwitterLogoImage" alt="Logo" />

            <app-text as="span" size="sm">
              Não tem uma conta?
              <a
                class="text-decoration-none"
                href=""
                @click.prevent="$router.push({ path: '/auth/register/steps' })"
              >
                <app-text as="strong" color="primary" weight="semibold">Inscreva-se</app-text>
              </a>
            </app-text>
          </div>

          <app-text class="w-75 d-block mt-8" as="strong" size="4xl" color="text-800">
            Descubra o que está em alta
          </app-text>

          <v-form v-model="isFormValid" class="pt-5 mt-15">
            <v-text-field
              id="email"
              v-model="inputs.email.value"
              class="mt-3"
              :color="primaryColor"
              placeholder="Celular, e-mail ou nome de usuário"
              :error-messages="inputs.email.error_messages"
            >
              <template #prepend-inner>
                <ph-user class="me-3" :color="gray500" size="20" />
              </template>
            </v-text-field>

            <v-text-field
              id="senha"
              v-model="inputs.password.value"
              class="mt-3"
              :type="inputs.password.show ? 'text' : 'password'"
              :color="primaryColor"
              placeholder="Digite sua Senha"
              :error-messages="inputs.password.error_messages"
              @click:append-inner="inputs.password.show = !inputs.password.show"
            >
              <template #prepend-inner>
                <ph-key class="me-3" :color="gray500" size="20" />
              </template>

              <template #append-inner>
                <ph-eye
                  v-if="inputs.password.show"
                  class="me-3"
                  :color="gray500"
                  size="20"
                  @click="inputs.password.show = false"
                />
                <ph-eye-slash
                  v-else
                  class="me-3"
                  :color="gray500"
                  size="20"
                  @click="inputs.password.show = true"
                />
              </template>
            </v-text-field>
            <div class="d-flex justify-end">
              <NuxtLink to="/auth/password/recover">
                <app-text class="text-underline" as="span" color="primary">
                  Esqueceu sua senha?
                </app-text>
              </NuxtLink>
            </div>

            <app-button
              class="d-flex justify-center py-4 mt-12"
              full
              type="button"
              background="primary"
              @click="$router.push({ path: '/app/home' })"
            >
              Conecte-se agora
            </app-button>
          </v-form>

          <div class="mt-10 separator w-50 text-center mx-auto">Ou</div>

          <div class="d-flex flex-wrap justify-center mt-10 gap-30">
            <app-button background="gray-200" class="d-flex align-center">
              <img class="icon" :src="GoogleImage" alt="Google" />
              <app-text class="ms-3" as="strong" color="gray-500" weight="semibold">
                Entrar com Google
              </app-text>
            </app-button>
            <app-button background="gray-900" class="d-flex align-center">
              <img class="icon" :src="AppleImage" alt="Apple" />
              <app-text class="ms-3" as="strong" color="white" weight="semibold">
                Entrar com Apple
              </app-text>
            </app-button>
          </div>
        </div>
      </div>
    </template>
  </container>
</template>
<script setup>
import { PhUser, PhKey, PhEye, PhEyeSlash } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

import Container from '../components/Container.vue'
import TwitterLogoImage from '@/assets/icons/logo.png'
import GoogleImage from '@/assets/icons/google.svg'
import AppleImage from '@/assets/icons/apple.svg'

const theme = useTheme()
const { primary: primaryColor, 'gray-500': gray500 } = theme.current.value.colors

// const user = reactive({});

const inputs = reactive({
  password: { error_messages: [], show: false, value: '' },
  email: { error_messages: [], value: '' },
})

const isFormValid = ref('')
</script>

<style scoped lang="scss">
.text-bold {
  color: rgb(var(--v-theme-primary));
}

.text-finn {
  color: #171923;
  font-weight: 400;
}

.text-underline {
  font-size: 0.9rem;

  text-decoration: underline;

  cursor: pointer;

  color: rgb(var(--v-theme-primary));
}

.icon {
  max-width: 30px;
  width: 30px;
  height: 30px;
  max-height: 30px;
}
</style>
