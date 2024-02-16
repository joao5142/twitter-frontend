<template>
  <div>
    <div
      v-for="([key, color], index) in Object.entries(colors.light)"
      :key="'color' + index"
      :style="{ backgroundColor: color, padding: '2rem' }"
    >
      <div
        :style="{
          fontSize: '1.2rem',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#fff') < 3.5 ? 'black' : 'white',
        }"
      >
        <strong>{{ key }}</strong>
        <span>{{ color }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getContrast } from 'polished'
import { DefaultTheme } from '../../theme'

const { colors } = DefaultTheme

console.log(Object.entries(colors))
</script>

<sty le scoped></sty>
