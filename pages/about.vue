<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">關於我們</div>
      <div class="subtitle">About us</div>

      <img class="cover" src="/images/about.webp" alt="Team working" />

      <div class="brand">頂加影音團隊 Rooftop Producations</div>
      <div class="textBlock">於台灣某間頂加發跡，注重於關於獸的影音發展。</div>

      <div class="title">團隊成員</div>

      <div class="cols">
        <div class="col-3 staff" v-for="staff in staffs" :key="staff.name">
          <img class="avatar" :src="staff.img" :alt="staff.name" />
          <div class="name">
            {{ staff.name }}
          </div>
          <div class="position">
            {{ staff.position }}
          </div>
          <div class="description">
            {{ staff.description }}
          </div>
          <div class="links">
            <div class="link" v-for="link in staff.links" :key="link.url">
              <a :href="link.url"><i :class="'mdi mdi-' + link.icon"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="title">曾經說過</div>

      <div class="cols">
        <div class="col-3" v-for="said in someoneSaid" :key="said.by">
          <blockquote class="someoneSaid m-1">
            <div class="content">{{ said.content }}</div>
            <div class="by">- {{ said.by }} {{ said.time }}</div>
          </blockquote>
        </div>
      </div>

      <marquee>
        <div class="名言佳句們">
          <div>大助貓貓</div>
          <div>快樂山松</div>
          <div>跟鬼一樣</div>
          <div>龍霸天下</div>
          <div>守逸讚啦</div>
          <div>小亞可愛</div>
        </div>
      </marquee>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someoneSaid: [
        { by: "大助", time: "2022", content: "KC 說：「龍霸天下」" },
        { by: "守逸", time: "2022", content: "我都賠錢拍片" },
        { by: "KC", time: "2022", content: "怪我囉" },
        { by: "山松", time: "2022", content: "我的松果！" },
      ],
      staffs: [
        {
          name: "KC",
          description: "Krescent The Dragon🐲",
          position: "Co-founder",
          img: "https://pbs.twimg.com/profile_images/1505233581660327937/SoSSjuDL_400x400.jpg",
          links: [{ type: "website", url: "https://zfnkc.tw", icon: "earth" }],
        },
        {
          name: "山松",
          description: "只是一個有些松鼠特色的狐狸！",
          position: "Co-founder, 打雜工",
          img: "https://gravatar.com/avatar/029574036459a099c980ace8237e4bbb?s=800&d=robohash&r=x",
          links: [{ type: "website", url: "https://mptw.me", icon: "earth" }],
        },
        {
          name: "Plumbercat",
          description: "會水電的山貓",
          position: "Co-founder, 打雜工",
          img: "https://avatars.plurk.com/3547399-big34812186.jpg",
          links: [
            {
              type: "website",
              url: "https://plumbercat.com.tw",
              icon: "earth",
            },
          ],
        },
        {
          name: "大助",
          description: "貓",
          position: "Co-founder",
          img: "https://avatars.plurk.com/16317101-big47428639.jpg",
          links: [
            {
              type: "website",
              url: "https://hackmd.io/@daisuke/intro",
              icon: "earth",
            },
          ],
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

.cover {
  object-fit: cover;
  height: 40vh;
}

.textBlock {
  margin: 1rem 0rem;
}

.brand {
  font-size: 3rem;
  margin: 2rem 0rem;
}

/* Someone said */
.someoneSaid {
  background: rgba(0, 0, 0, 0.1);
  padding: 1.8rem;
}
.someoneSaid > .content {
  font-size: 1.6rem;
  position: relative;
  top: -1rem;
  left: -1rem;
}
.someoneSaid > .by {
  font-size: 1rem;
  position: relative;
  bottom: -1rem;
  right: -1rem;
  text-align: right;
  font-style: italic;
}

/* Staff */
.staff {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  box-sizing: border-box;
}
.staff > .avatar {
  border-radius: 50%;
}

.staff > .name {
  font-size: 2rem;
  margin-top: 0.8rem;
}
.staff > .position {
  font-size: 1rem;
  color: gray;
  margin-top: 0.4rem;
}
.staff > .description {
  font-size: 1rem;
  margin-top: 0.8rem;
}
.staff > .links {
  margin-top: 2rem;
}
.staff > .links > .link {
  display: flex;
  justify-content: center;
  align-items: center;

  background: lightgray;
  font-size: 2rem;

  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;

  transition: 0.2s;
}
.staff > .links > .link:hover {
  transform: translateY(-4px);
}

.名言佳句們 {
  margin-top: 5rem;
  display: flex;
}
.名言佳句們 > * {
  font-size: 3rem;
  margin-right: 80rem;
}
.名言佳句們 > *:last-child {
  margin-right: 0rem;
}
</style>
