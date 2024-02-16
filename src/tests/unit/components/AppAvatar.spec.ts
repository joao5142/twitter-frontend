import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppAvatar from '@/components/ui/AppAvatar.vue'

const wrapper = mount(AppAvatar, {
  props: {
    isOnline: true,
    mode: 'image',
    width: '40',
    height: '40',
    src: 'image',
  },
})

describe('AppBox', () => {
  it('should render correctly', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('should set props correctly', () => {
    const imageEl = wrapper.get('[data-test="app-avatar-image"]')
    const onlineDivEl = wrapper.get('[data-test="app-avatar-online"]')

    expect(imageEl.element).toBeTruthy()
    expect(imageEl.attributes('src')).toBe('image')

    expect(onlineDivEl.element).toBeTruthy()

    expect(wrapper.classes()).includes('avatar--width')
    expect(wrapper.classes()).includes('avatar--height')
  })

  it('should render a text inside it  when text prop is set', () => {
    const wrapper = mount(AppAvatar, {
      props: {
        text: 'Joao',
      },
    })
    const textEl = wrapper.get('[data-test="app-avatar-text"]')

    expect(textEl.text()).toBe('Joao')
  })
})
