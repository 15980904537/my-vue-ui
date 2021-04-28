const requireComponent=require.context('./', true,/\.vue/);
function install(Vue) {  
    requireComponent.keys().forEach(item => {
        let config = requireComponent(item);
        console.log(requireComponent(item))
        if (config._esModule !== 'undefined') { 
            Vue.component(config.default.name, config.default)

        } else {
            Vue.component(config.name,config)
        }
    });
}
export default install 

//单元测试
// {
//     console.log(Button)
// }