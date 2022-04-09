<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">相關項目</div>
      <div class="subtitle">Works</div>
      <div class="cols">
        <div class="col-6" v-for="work in works" :key="work.name">
          <a :href="work.url" target="_blank">
            <div class="work">
              <img :src="work.img" alt="" />
              <div class="name">{{ work.name }}</div>
              <div class="description">{{ work.description }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          name: "Furshion 獸時尚",
          description: "致力推展時尚獸文化，讓你看見「獸」的更多不一樣",
          img: "/images/works/furshion.webp",
          url: "https://furshion.furry.taipei/",
        },
        {
          name: "Furry TV 獸迷 TV",
          description: "提供關於獸的影音串流平台",
          img: "/images/works/tv.webp",
          url: "https://furshion.furry.taipei/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}
.title {
  margin-top: 3rem;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
.work {
  padding: 1rem;
  margin: 1rem;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: 0.2s;
}

.work > .name {
  font-size: 2rem;
  margin-top: 1rem;
}
.work > .description {
  font-size: 1.2rem;
  margin-top: 1rem;
}

.work:hover {
  transform: translateY(-4px);
  box-shadow: 0px 0px 8px -2px rgba(0, 0, 0, 0.2);
}
</style>
