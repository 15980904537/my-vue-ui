import { shallowMount, mount } from '@vue/test-utils'
import { expect } from 'chai'

import Button from '../../src/packages/Button.vue' // 导入组件
import Icon from '../../src/packages/Icon.vue' // 导入组件


// import sinon from 'sinon'
// import sinonChai from "sinon-chai";
// chai.use(sinonChai);
// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('Button.vue', () => {
    // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
    it('存在', () => {
        expect(1+1).to.eq(2)
    })
    it('能显示slot中的内容', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default:'hahha'
            }
        })
        expect(wrapper.text()).to.eq('hahha')
    })
    it('展示icon', () => { 
        const wrapper = shallowMount(Button, {
            stubs: {
                "my-icon":Icon
            },
            propsData: {
                icon:'add'
            }
        })

        console.log(wrapper.html())
        expect(wrapper.find("use").attributes("href")).to.eq('#icon-add')
    })
    
})
