const netflixCategoriesURL = 'https://raw.githubusercontent.com/RobertJGabriel/netflix-secret-categories-json/master/index.json';

import Vue from 'vue';
import VueResource from 'vue-resource'
import Favorites from './components/favorites.vue';
import Category from './class/category';
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


library.add(
  faHeart,
  faHome,
  faCogs,
  faMoneyBillAlt,
  faQuestionCircle,
  faEraser,
  faMoneyCheckAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-favorites', Favorites)
Vue.component('pacman-loader', PacmanLoader);


Vue.use(VueResource);

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  components: {
    FontAwesomeIcon,
    Favorites,
    PacmanLoader
  },
  data: {
    brandColor: '#db0000',
    categories: [],
    favorites: [],
    search: '',
    loading: true,
    paid: true,
    license: 'EXPIRED',
    currentTab: 'home'
  },
  computed: {
    filteredResults() {
      return this.categories.filter(category => {
        return !this.search ||
          category.value.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    filteredFavorites() {
      return this.categories.filter((category) => {
        return category.favorite == true;
      });
    }
  },
  methods: {
    // Update Licence
    load() {
      this.loading = true; // Trigger the loading module
      // Make the api request
      let randomNumber = Math.floor((Math.random() * 10) + 1);
      this.$http.get(netflixCategoriesURL, randomNumber, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      }).then(
        response => {
          // get body data

          const keys = JSON.parse(response.bodyText);
          // Loop though the objects to create the json
          Object.keys(keys).map(id => {
            let value = keys[id];
            let object = new Category(id, value);
            this.categories.push(object); // Push the new objects to the categories varabile.
          });
          setTimeout(() => {
            this.loading = false;
          }, 500);
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
    },
    updateFavorites(item, index, fav) {

      if (!this.paid) return false; // Disable this feature if not paided

      item.favorite = fav; // Update the status of the object

      // If favorite, set as true
      if (fav) {
        localStorage.setItem(item.value.toLowerCase(), true);
      }

      // If favorite is false
      if (!fav) {
        localStorage.removeItem(item.value.toLowerCase());
      }

      // Set the object details
      this.$set(this.categories, index, item);
    },


    updateLicense(license) {
      if ((license.license == 'FULL') || (license.license == 'TRIAL')) {
        this.paid = true;
      } else {
        this.paid = false;
      }
      this.license = license.license;
    },
    switchView(view) {
      this.loading = true;
      this.currentTab = view; // Switch the view tabs
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    clearFavorites() {
      localStorage.clear(); // Clear the favorites
    }
  }

});
vm.load();
