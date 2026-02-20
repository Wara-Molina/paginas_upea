import { createStore } from 'vuex'

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

export default createStore({
  state: {
    url_api: process.env.VUE_APP_ROOT_API,
    getter: true,
    MenuConv: [],
    MenuCur: [],
    Links: [],
    Institucion: {},
    statusImg: true,

  },
  getters: {
  },
  mutations: {
    loadOn() {
      document.querySelector("#preloader").style.visibility = "visible";
      window.scrollTo(0, 0);
    },
    loading() {
      document.querySelector("#preloader").style.visibility = "hidden";
    },
    clickLink(state) {
      window.scrollTo(0, 0);
      state.getter = true
    },
    idEncrypt() {
      console.log(cryptr.encrypt("hola"))
    }
  },
  actions: {
  },
  modules: {
  }
})
