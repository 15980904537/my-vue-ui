import Vue from 'vue'

let onClickDocument = (e) => { 
    callback.forEach(item => {
        if (item.el === e.target || item.el.contains(e.target)) {
            return
        } else { 
            item.callback()
}
        })
}

let callback = [];
document.addEventListener('click', onClickDocument)

export default Vue.directive('clickOutside', {
    bind(el,binding,vnode) { 
       
        callback.push({
            el,
            callback: binding.value
        })

        // document.addEventListener('click', (e) => {
        //     if (e.target === el || el.contains(e.target)) {
        //         return
        //     } else { 
        //         binding.value()
        //     }

        //  })
    }
})
export const removeListener = () => { 
    document.removeEventListener('click', onClickDocument)

}