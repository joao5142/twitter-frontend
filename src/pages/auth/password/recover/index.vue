<template>
  <container>
    <template #content>
      <div class="h-100 d-flex flex-column justify-space-between pb-4 scrollable">
        <div>
          <app-button
            border-color="primary"
            outlined
            class="py-2 px-3"
            @click.passive="handleBackStep"
          >
            <ph-caret-left :size="25" :color="primaryColor" weight="light" />
          </app-button>

          <app-text class="mt-12" size="lg" as="h1">Recuperar senha</app-text>

          <app-text class="mt-2 d-block mb-7" size="md" as="span">
            Complete as etapas e redefina sua senha
          </app-text>

          <app-step :current="currentStep" :steps="steps">
            <template #item.1>
              <step-1
                @change-mode="(mode: 'phone' | 'email') => (selectedRecoverModeValue = mode)"
              />
            </template>

            <template #item.2>
              <step-2
                @code-filled="(code: string) => (inputs.code = code)"
                @code-is-full-filled="(isFilled: boolean) => (codeIsFullFilled = isFilled)"
              />
            </template>

            <template #item.3>
              <step-3
                @password-validated="(isValid: boolean) => (passwordIsValid = isValid)"
                @change-password="(password: string) => (inputs.password = password)"
                @change-password-confirmation="
                  (password: string) => (inputs.password_confirmation = password)
                "
              />
            </template>
          </app-step>
        </div>

        <app-button
          v-if="currentStep == 1"
          :disabled="!selectedRecoverModeValue"
          full
          size="lg"
          class="mt-auto"
          @click.passive="handleSendCode"
        >
          <app-text as="strong" color="white" weight="medium">Próxima etapa</app-text>
        </app-button>

        <app-button
          v-else-if="currentStep == 2"
          :disabled="Boolean(!codeIsFullFilled)"
          full
          size="lg"
          class="mt-5"
          @click.passive="handleNextStep"
        >
          <app-text as="strong" color="white" weight="medium">Proxima etapa</app-text>
        </app-button>

        <app-button
          v-else
          :disabled="Boolean(isCompleteButtonDisable)"
          full
          size="lg"
          class="mt-5"
          @click.passive="handleSaveNewPassword"
        >
          <app-text as="strong" color="white" weight="medium">Concluir</app-text>
        </app-button>

        <app-modal v-model="isModalOpen" :is-closable="false" max-width="500px">
          <div class="d-flex flex-column align-center gap-4 py-5">
            <img class="recovered-img" :src="PasswordRecoveredImage" alt="Password recovered" />
            <app-text
              class="d-block mt-8 mb-2"
              as="strong"
              size="xl"
              color="text-700"
              weight="semibold"
            >
              Senha recuperada com sucesso!
            </app-text>
            <app-text as="strong" color="text-800" weight="regular">
              Uma nova senha foi criada para este usuário
            </app-text>

            <app-button size="md" class="px-16 mt-10" @click="handleNavigateToLogin">
              <app-text as="strong" color="white" weight="medium">Fazer login</app-text>
            </app-button>
          </div>
        </app-modal>
      </div>
    </template>
  </container>
</template>

<script setup lang="ts">
import { PhCaretLeft } from '@phosphor-icons/vue'
import { useTheme } from 'vuetify'

import Container from '../../components/Container.vue'

import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'

import PasswordRecoveredImage from '@/assets/ilustrations/password-recovered.svg'

useSeoMeta({
  title: 'Password Recover',
})

const router = useRouter()
const theme = useTheme()

const steps = [{ name: 'Método' }, { name: 'Código' }, { name: 'Redefinição' }]
const currentStep = ref<number>(1)

const { primary: primaryColor } = theme.current.value.colors

const selectedRecoverModeValue: Ref<'email' | 'phone' | ''> = ref('')

// code check
const codeIsFullFilled = ref<boolean>(false)

// password
const passwordIsValid = ref<boolean>(false)

const isModalOpen = ref<boolean>(false)

const inputs = reactive({
  password: '',
  password_confirmation: '',

  code: '',
})

const isCompleteButtonDisable = computed(() => {
  if (Boolean(inputs.password) && Boolean(inputs.password_confirmation)) {
    if (passwordIsValid.value && inputs.password === inputs.password_confirmation) {
      return false
    } else {
      return true
    }
  } else {
    return true
  }
})

function handleBackStep() {
  if (currentStep.value > 1) {
    currentStep.value = currentStep.value - 1
  } else {
    router.push({ path: '/auth/login' })
  }
}
function handleNextStep() {
  if (currentStep.value < steps.length) {
    currentStep.value = currentStep.value + 1
  }
}
function handleSendCode() {
  handleNextStep()

  // selectedRecoverModeValue
}

function handleSaveNewPassword() {
  isModalOpen.value = true
}

function handleNavigateToLogin() {
  router.push({ path: '/auth/login' })
}
</script>

<style scoped lang="scss">
@use '@/styles/_mixins.scss' as mixins;
.recovered-img {
  width: 200px;
  height: auto;
}

.scrollable {
  overflow: auto;
  max-height: 800px;
  padding-right: 50px;

  @include mixins.scrollStyles();

  @media (max-width: 450px) {
    padding-right: 10px;
  }
}
</style>
