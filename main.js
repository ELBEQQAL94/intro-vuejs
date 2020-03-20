Vue.component("product", {
  template: `<div class="container">
  <div class="row" :key="product.id" v-for="product in products">
    <div class=" mt-5 col-md-6">
      <img class="img-thumbnail" :src="product.imgURL" alt="elephant" />
    </div>
    <div class="col-md-6">
      <h2 :style="headerStyle" class="mt-5">
        {{ product.product }}
        <span v-if="product.inStock" class="is-avaliable">In Stock</span>
        <span v-else class="is-not-avaliable">Out of Stock</span>
      </h2>
      <p class="lead text-justify">{{ product.description }}</p>
      <button
        type="button"
        @click="addToCart"
        class="btn btn-primary btn-block"
      >
        Add To Cart
      </button>
      <button
        type="button"
        @click="removeFromCart"
        class="btn btn-danger btn-block"
      >
        Remove From Cart
      </button>
      <button type="button" class="btn btn-secondary btn-block" disabled>
        Cart({{cart}})
      </button>
    </div>
  </div>
  </div>
  `,
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart !== 0) {
        this.cart -= 1;
      }
    }
  },
  data() {
    return {
      cart: 0,
      headerStyle: {
        color: "red"
      },
      products: [
        {
          id: 1,
          product: "2013 Scion FR-S sports car",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          imgURL:
            "https://1.bp.blogspot.com/-j343p08TFhc/T80NLl9XDgI/AAAAAAAAWBg/oKFfLp1eA4Y/s1600/scion-fr-s-2013-dda-1.jpg",
          inStock: true
        },
        {
          id: 2,
          product: "Honda car",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          imgURL:
            "https://1.bp.blogspot.com/-uRulU4H92EQ/Tm9Ef9OB4jI/AAAAAAAAcq0/p-uRN9VDZ8c/s1600/picture+of+honda+cars+1.jpg",
          inStock: true
        }
      ]
    };
  }
});
var app = new Vue({
  el: "#app"
});
