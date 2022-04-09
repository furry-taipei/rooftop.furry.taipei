<template>
  <div>
    <Navbar></Navbar>
    <NuxtPage v-if="introPlayed"></NuxtPage>
    <div ref="introContainer" id="introContainer">
      <div ref="intro" id="intro"></div>
    </div>
    <div class="copyright">Copyright © {{new Date().getFullYear()}} 頂加影音團隊</div>
  </div>
</template>

<script>
import introAnimateData from "~/static/intro";
import lottie from "lottie-web";

export default {
  mounted() {
    this.lottie = lottie.loadAnimation({
      container: this.$refs.intro,
      renderer: "html",
      loop: false,
      autoplay: true,
      animationData: introAnimateData,
      rendererSettings: {
        scaleMode: "centerInside",
      },
    });
    this.lottie.onComplete = () => {
      this.introPlayed = true;
      this.$refs.introContainer.style.top = "-120vh";
      setTimeout((_) => {
        this.lottie.destroy();
      }, 2000);
    };
  },
  data() {
    return {
      lottie: null,
      introPlayed: false,
    };
  },
};
</script>

<style scoped>
#introContainer {
  background: #fff;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s cubic-bezier(0.75, -0.01, 0.22, 0.99);
  box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.1);
}

#intro {
  position: relative;
  width: 30vw;
  height: 30vw;
}

.copyright {
  margin-top: 5em;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  color: gray;
}
</style>
