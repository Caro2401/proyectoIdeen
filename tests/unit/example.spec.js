import { shallowMount } from '@vue/test-utils'
import FirstView from '@/components/FirstView.vue'

describe('FirstView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(FirstView, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
