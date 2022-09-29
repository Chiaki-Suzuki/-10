<template>
  <section class="main_img_area">
    <div class="main_img"></div>
  </section>
</template>

<script>
export default {
  name: 'topview'
}
</script>

<style>
section.main_img_area {
    width: 100%;
}

section.main_img_area .main_img {
    background: url("../assets/../assets/images/main_sp.png") 0 0 / cover no-repeat;
    height: 49vw;
    background-position: center;
    margin: auto;
}

section.main_img_area {
    background: rgb(148, 187, 233);
    background: radial-gradient(circle, rgba(148, 187, 233, 1) 0%, rgba(206, 224, 245, 1) 39%, rgba(255, 255, 255, 0.10547969187675066) 100%);
}

@media screen and (min-width:768px) {
      section.main_img_area {
        margin-top: 84px;
    }

    section.main_img_area .main_img {
        background: url("../assets/../assets/images/main_pc.png") 0 0 / cover no-repeat;
        height: 39vw;
        max-width: 890px;
    }
}
</style>
