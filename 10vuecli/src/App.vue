<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  head: function() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: './assets/destyle.css'
        }
      ]
    }
  }
}
</script>

<style>
@charset "UTF-8";
@import "./assets/destyle.css";
/*-------------------------
    初期設定
-------------------------*/
html {
  scroll-behavior: smooth;
}

body {
    width: 100%;
}

.red {
    color: rgb(253, 0, 0);
}

a {
    display: inline-block;
}

a:hover {
    opacity: 0.5;
}

p {
    font-size: 15px;
    color: #444;
    font-size: 15px;
}

img {
    width: 100%;
}

:hover {
    transition: .4s ease-in;
}

.rink_btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

/*-------------------------
    PC・SP 共通
-------------------------*/
/* section:nth-child(odd) {
    background-color: rgba(191, 220, 255, 0.2);
} */
section:nth-child(even) {
    background-color: rgba(191, 220, 255, 0.2);
}

/* アコーディオン */
.accordion-container {
    position: relative;
    width: 100%;
    border-top: none;
    outline: 0;
    cursor: pointer
}

.accordion-container .accordion-title {
    display: block;
    position: relative;
    margin: 0;
    padding: 0.625em;
    font-weight: normal;
    color: #444;
    cursor: pointer;
    border: solid 1px rgba(79, 209, 217, 0.6);
}

.accordion-container>h3:nth-of-type(2),
.accordion-container>h3:nth-of-type(3) {
    margin-top: 10px;
}

.accordion-container .accordion-title:hover,
.accordion-container .accordion-title:active,
.accordion-container .content-entry.open .accordion-title {
    background-color: rgba(79, 209, 217, 0.6);
    color: white;
}

.accordion-container .accordion-title:hover i:before,
.accordion-container .accordion-title:hover i:active,
.accordion-container .content-entry.open i {
    color: white;
}

.accordion-title {
    position: relative;
}

.accordion-title:after {
    content: "";
    position: absolute;
    right: 25px;
    top: 25%;
    transition: all 0.2s ease-in-out;
    display: block;
    border-top: solid 2px rgba(79, 209, 217, 0.6);
    border-right: solid 2px rgba(79, 209, 217, 0.6);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
}

.accordion-title.open:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 45%;
}

.accordion-content {
    display: none;
    background-color: rgba(79, 209, 217, 0.1);
    padding: 20px 40px;
    line-height: 25px;
    letter-spacing: 1px;
}

.accordion-title::before {
    content: "";
    display: inline-block;
    width: 10px;
    margin-right: 20px;
    background: linear-gradient(175deg, #4FD1D9 30%, rgba(70, 128, 198, 0.5));
    margin-bottom: -6px;
}

.accordion-container {
    margin: 0 auto 1.875em auto;
}

/* //アコーディオン */
.contents {
    margin-top: 30px;
    overflow-y: hidden;
}

/* --- h2 タイトル ---*/
h2 {
    font-weight: 700;
    color: #3E77BD;
    letter-spacing: 16px;
}

h2::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 40px;
    margin-right: 10px;
    background-color: #46C9DB;
    margin-bottom: -10px;
}

section div.inner {
    margin: 0 auto;
    width: 90%;
    max-width: 1100px;
    padding: 50px 0;
}

section {
    margin-top: 50px;
    width: 100%;
    margin: 50px auto 0 auto;
}

/* アコーディオン */
.accordion-title::before {
    height: 21px;
}

.accordion-container .accordion-title {
    font-size: 1em;
}

.accordion-title:after {
    width: 11px;
    height: 11px;
}

/* 表示変更 */
.sp_only {
    display: block;
}

.pc_only {
    display: none;
}

/*-------------------------
    PC設定
-------------------------*/
@media screen and (min-width:768px) {
    /* --- h2 タイトル ---*/
    h2 {
        font-size: 25px;
    }

    /* アコーディオン */
    .accordion-title::before {
        height: 27px;
    }

    .accordion-container .accordion-title {
        font-size: 1.25em;
    }

    .accordion-title:after {
        width: 15px;
        height: 15px;
    }

    @media screen and (max-width:982px){
        div.rinen>h3 {
            font-size: 12px;
            letter-spacing: -1px;
        }

        div.rinen p.rinen_text {
            height: 140px;
        }

        div.rinen:nth-of-type(1) p.rinen_img {
            /* background: url("../assets/../assets/images/rinen1.jpg") 0 0 / cover no-repeat; */
        }

        div.rinen:nth-of-type(2) p.rinen_img {
            /* background: url("../assets/../assets/images/rinen3.jpg") -40px 0 / cover no-repeat; */
        }
        p.daihyou_img {
            width: 200px;
            height: 270px;
        }
    }

    /* 表示変更 */
    .sp_only,
    .flexbtn.sp_only {
        display: none;
    }

    .pc_only {
        display: block;
    }
}
</style>
