const wallpapersJSON = './scripts/wallpapers.json';

// Import resources
import Vue from 'vue';
import VueResource from 'vue-resource'
import Images from './components/images.vue';
import VueLazyImage from "vue-lazy-images";


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

// Font awesome components
library.add(faSearch, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-images', Images)

// Register components.
Vue.use(VueResource);
Vue.use(VueLazyImage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    FontAwesomeIcon,
    Images
  },
  data: {
    photos: [],
    search: '',
    isOpen: false,
    loading: true
  },
  computed: {
    filteredResults() {
      return this.photos.filter(photo => {
        if (!this.search) {
          return this.photos.sort((a, b) => parseFloat(a.group) - parseFloat(b.group)); // Sorting alorgthim iOS 12 - 1
        } else {
          let searchResult = photo.group.includes(parseFloat(this.search));
          return searchResult;
        }
      });
    },
    searchResult() {
      if (this.filteredResults.length === 0 && this.loading == false) {
        return `No Wallpapers found for "${this.search}"`;
      }
    }
  },
  mounted: function () {
    // Make the api request
    this.$http.get(wallpapersJSON).then(
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
          this.loading = false;
        }
        this.photos.sort((a, b) => parseFloat(b.group) - parseFloat(a.group));
      },
      response => {
        // error callback
        console.error(response);
        this.photos = [];
        this.loading = false;
      }
    )
  },
  methods: {
    /**
     * @param  {} number
     */
    isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },

    open(e) {
      e.stopPropagation();
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.search.focus();
      })
    },
    outside(e) {
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