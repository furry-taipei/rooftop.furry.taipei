<template>
  <div :class="menuOpened ? 'nav open' : 'nav'">
    <span class="brand" @click="openMenu">
      <div class="logoContainer">
        <RooftopLogo class="logo"></RooftopLogo>
        Rooftop Producations
      </div>
      <i class="mobile mdi mdi-menu"></i>
    </span>

    <div class="spacer"></div>

    <nuxt-link @click="linkClicked" to="/" class="link">HOME</nuxt-link>
    <nuxt-link @click="linkClicked" to="/works" class="link">WORKS</nuxt-link>
    <nuxt-link @click="linkClicked" to="/about" class="link"
      >ABOUT US</nuxt-link
    >
    <nuxt-link @click="linkClicked" to="/contact" class="link"
      >CONTACT</nuxt-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
    };
  },
  methods: {
    openMenu() {
      this.menuOpened = !this.menuOpened;
    },
    linkClicked() {
      this.menuOpened = false;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1rem;
}

.logoContainer {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  .nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 2rem;
    height: 2rem;
    transition: 0.6s cubic-bezier(0.6, 0.02, 0.38, 0.99);
    overflow: hidden;
  }

  .nav.open {
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
  }

  .nav > * {
    margin-bottom: 1rem;
  }
  .nav > *:last-child {
    margin-bottom: 0rem;
  }

  .brand {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  .link {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.4s;
    border-bottom: 2px solid transparent;
  }
  .link:hover {
    border-bottom: 2px solid black;
  }

  .mdi-menu {
    font-size: 2rem;
  }
}

@media only screen and (min-width: 769px) {
  .mobile {
    display: none;
  }

  .nav {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  }

  .nav > * {
    margin-right: 2rem;
  }
  .nav > *:last-child {
    margin-right: 0rem;
  }

  .brand {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }

  .spacer {
    flex: 1;
  }

  .link {
    cursor: pointer;
    transition: 0.4s;
    border-bottom: 2px solid transparent;
  }
  .link:hover {
    border-bottom: 2px solid black;
  }
}
</style>
