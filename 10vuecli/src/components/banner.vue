<template>
  <section id="section_8" class="section_8">
  <div class="inner">
      <div class="link_bt_area">
          <!-- <p class="link_title">相続関連業務・投資信託<br>専用ホームページ</p> -->
          <p class="link_bt"><a href="http://souzoku.legal-contact.com">詳しくはこちら</a></p>
      </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style>
/* section8 リンクエリア */
.link_bt_area {
    border: 4px solid rgba(88, 155, 236, 0.5);
    color: #3E77BD;
    margin: 0 auto;
    background: url("../assets/../assets/images/link_bt.jpg") 0 0 / cover no-repeat;
    background-position: center;
}

.link_bt a {
    color: #fff;
    background-color: rgba(62, 119, 189, 0.8);
    padding: 13px 70px;
    border-radius: 20px;
}

.link_bt {
    text-align: center;
    margin-top: 170px;
    margin-bottom: 36px;
}

@media screen and (min-width:768px) {
      /* section8 リンクエリア */
    .link_bt_area {
        width: 356px;
        height: 230px;
    }
}
</style>
