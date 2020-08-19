import Vue from 'vue'
import App from './App'
import SeButton from './components/button.vue'
import SeDialog from './components/dialog.vue'
import SeInput from './components/input.vue'
import SeSwitch from './components/switch.vue'
import SeRadio from './components/radio.vue'
import SeRadioGroup from './components/radio-group.vue'
import SeCheckbox from './components/checkbox.vue'
import SeCheckboxGroup from './components/checkbox-group.vue'
import SeForm from './components/form.vue'
import SeFormItem from './components/form-item.vue'
// import './assets/fonts/font.scss'

Vue.config.productionTip = false

Vue.component(SeButton.name, SeButton)
Vue.component(SeDialog.name, SeDialog)
Vue.component(SeInput.name, SeInput)
Vue.component(SeSwitch.name, SeSwitch)
Vue.component(SeRadio.name, SeRadio)
Vue.component(SeRadioGroup.name, SeRadioGroup)
Vue.component(SeCheckbox.name, SeCheckbox)
Vue.component(SeCheckboxGroup.name, SeCheckboxGroup)
Vue.component(SeForm.name, SeForm)
Vue.component(SeFormItem.name, SeFormItem)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
