const wallpapersJSON = './scripts/wallpapers.json';

import Vue from 'vue';
import VueResource from 'vue-resource'
import Images from './components/images.vue';
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'


import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
  faHeart
} from '@fortawesome/free-solid-svg-icons/faHeart'
import {
  faHome
} from '@fortawesome/free-solid-svg-icons/faHome'
import {
  faCogs
} from '@fortawesome/free-solid-svg-icons/faCogs'
import {
  faMoneyBillAlt
} from '@fortawesome/free-solid-svg-icons/faMoneyBillAlt'
import {
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons/faQuestionCircle'
import {
  faEraser
} from '@fortawesome/free-solid-svg-icons/faEraser'
import {
  faMoneyCheckAlt
} from '@fortawesome/free-solid-svg-icons/faMoneyCheckAlt'

import {
  faSearch
} from '@fortawesome/free-solid-svg-icons/faSearch'


library.add(
  faHeart,
  faHome,
  faCogs,
  faMoneyBillAlt,
  faQuestionCircle,
  faEraser,
  faMoneyCheckAlt,
  faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-images', Images)
Vue.component('pacman-loader', PacmanLoader);


Vue.use(VueResource);

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  components: {
    FontAwesomeIcon,
    Images,
    PacmanLoader
  },
  data: {
    photos: [],
    search: '',
    loading: true
  },
  computed: {
    filteredResults() {
      return this.photos.filter(photo => {
        return !this.search ||
          photo.group.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    // Update Licence
    isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    load() {
      this.loading = true; // Trigger the loading module
      // Make the api request
      let randomNumber = Math.floor((Math.random() * 10) + 1);
      this.$http.get(wallpapersJSON, randomNumber, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      }).then(
        response => {
          // get body data


          const keys = JSON.parse(response.bodyText);
          // Loop though the objects to create the json


          for (const key in keys.children) {
            const keyId = key;

            const group = keys.children[keyId].name;
            let iOs = keys.children[keyId].name;
            if (this.isNumber(group)) {
              iOs = `iOs ${group}`;
              let object = {
                group,
                iOs,
                photos: keys.children[keyId].children
              }
              this.photos.push(object);
            }

          }


          this.photos.sort((a, b) =>   parseFloat(b.group)- parseFloat(a.group));


        },
        response => {
          // error callback
          this.loading = true;
          this.categories = [];
        }
      )
    },
    // returns a promise that resolves after the specified number of ms
    delay(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }

  }

});
vm.load();