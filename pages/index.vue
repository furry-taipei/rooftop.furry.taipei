<template>
  <div>
    <img class="cover" src="/images/home/furshion.webp" alt="Furshion Cover" />
    <div class="coverTextWrapper">
      <div class="coverText">
        <div class="coverTitle">FURSHION</div>
        <div class="coverSubTitle">
          致力推展時尚獸文化，讓你看見「獸」的更多不一樣
        </div>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <div class="blockMediaContainer">
          <div class="blockMediaBackground"></div>
          <img class="blockMedia" src="/images/home/pat.webp" alt="" />
        </div>
        <div class="blockText">
          <div class="blockTitle">這是標題</div>
          <div class="blockSubTitle">這邊是副標題或是簡介之類ㄉ</div>
        </div>
      </div>
      <div class="block mobile-reverse-flex">
        <div class="blockText">
          <div class="blockTitle">這是標題</div>
          <div class="blockSubTitle">這邊是副標題或是簡介之類ㄉ</div>
        </div>
        <div class="blockMediaContainer">
          <div class="blockMediaBackground"></div>
          <img class="blockMedia" src="/images/home/team.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
  object-fit: cover;
  height: 80vh;
}

@media only screen and (min-width: 769px) {
  .coverText {
    margin-left: 5rem;
  }
}
.coverTextWrapper {
  height: 2rem;
}
.coverText {
  position: relative;
  bottom: 10rem;

  width: fit-content;

  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  color: white;

  animation: slidein 2s cubic-bezier(0.45, 0.05, 0.09, 1);
}

.coverTitle {
  font-size: 3rem;
}
.coverSubTitle {
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1rem;
}

@keyframes slidein {
  0% {
    left: -100vw;
  }
  100% {
    left: 0;
  }
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block {
  width: 100%;
  max-width: 1280px;

  display: flex;
  margin-bottom: 1rem;
}

@media only screen and (max-width: 768px) {
  .block {
    flex-direction: column;
  }
  .mobile-reverse-flex {
    flex-direction: column-reverse !important;
  }
  .blockMediaContainer {
    width: 100%;
    padding-bottom: 70%;
  }
}
@media only screen and (min-width: 769px) {
  .block {
    flex-direction: row;
  }
  .blockMediaContainer {
    width: 50%;
    padding-bottom: 28.125%;
  }
  .blockMediaBackground {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 100%;
    height: 100%;
    background: lightblue;
  }
}
.blockMediaContainer {
  position: relative;
}
.blockMedia {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.blockText {
  width: 60%;
  padding: 2rem;
}
.blockTitle {
  font-size: 3rem;
}
.blockSubTitle {
  font-size: 1.6rem;
  margin-top: 1rem;
}
</style>
