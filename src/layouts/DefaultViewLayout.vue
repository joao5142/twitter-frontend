<template>
  <main>
    <slot></slot>
    <app-loading v-if="isLoading" />
  </main>
</template>

<script setup>

const { isLoading } = useLoadingIndicator()

</script>

<style scoped lang="scss"></style>
