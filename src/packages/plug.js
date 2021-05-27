import Toast from './toast.vue'

export default {
    install(Vue,option) { 
        Vue.prototype.$toast = function (message,toastOptions) { 
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: toastOptions.closeButton
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}