import Vue from 'vue'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
import step from './modules/step'
import driver from './modules/driver'
import impacts from './modules/impacts'
import time from './modules/time'
import table from './modules/table'

Vue.use(Vuex)
Vue.use(VTooltip)

export const modules = {
  step,
  driver,
  impacts,
  time,
  table
}
