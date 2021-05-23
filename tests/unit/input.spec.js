import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Input from '../../src/packages/input.vue'

describe('input.vue', () => {
    it('存在', () => {
        expect(Input).to.exist
    })
    it('接收value', () => {
        const wrapper = mount(Input, {
            propsData: {
                value: 'hahha',
                ee:'sa'
            }
        })
        expect(wrapper.props().value).to.equal('hahha')
    })

})