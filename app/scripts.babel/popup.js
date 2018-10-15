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
  faSearch
} from '@fortawesome/free-solid-svg-icons/faSearch'

import {
  faTimes
} from '@fortawesome/free-solid-svg-icons/faTimes'


library.add(faSearch, faTimes)

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
    loading: true,
    isOpen: false
  },
  computed: {
    filteredResults() {
      return this.photos.filter(photo => {
        if(!this.search){
          return this.photos.sort((a, b) => parseFloat(b.group) - parseFloat(a.group));
        }else{
          return   this.shuffle(photo.group.includes(parseFloat(this.search)));
        }
       
      });

    }
  },
  methods: {
    // Update Licence
    isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    load() {
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

            if (!this.isNumber(group)) return false;

            iOs = `iOs ${group}`;

            let object = {
              group,
              iOs,
              photos: keys.children[keyId].children
            }

            this.photos.push(object);

          }

          this.photos.sort((a, b) => parseFloat(b.group) - parseFloat(a.group));
          this.loading = false;

        },
        response => {
          // error callback
          this.loading = false;
          this.categories = [];
        }
      )
    },
    open(e) {
      console.log("open");
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.search.focus();
      })
    },
    outside(e) {
      console.log("outside");
      this.isOpen = false;
    }

  },
  directives: {
    'click-outside': {
      bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) {
            warn += `Found in component '${compName}'`
          }

          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },

      unbind(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  }

});
vm.load();