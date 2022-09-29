<template>
  <section id="section_1" class="section_1">
      <div class="inner">
          <h2 class="jimusyo_title">当事務所について</h2>
          <div class="contents">
              <div class="jimusyo_01_03 clearfix">
                  <!-- 相続に関連するお手続き -->
                  <div class="jimusyo_01">
                      <h3 class="jimusyo_sub_title"><img src="../assets/images/jimusyo_01.png" alt=""></h3>
                      <p>相続に関する手続きは複雑で多岐にわたります。財産によって名義変更の方法も違い、期限がある手続きも存在するため早いタイミングで専門家に相談することをお勧めいたします。</p>
                  </div>
                  <!-- 不動産の購入・売却 -->
                  <div class="jimusyo_02">
                      <h3 class="jimusyo_sub_title"><img src="../assets/images/jimusyo_02.png" alt=""></h3>
                      <p>土地や建物を売買したり贈与すると、所有権が移転します。高額な不動産の権利を守る手段が、所有権移転の登記です。登記情報を事前に調査し、安心安全に権利が移転できるようにサポートするのが司法書士です。</p>
                  </div>
                  <!-- 会社の設立等 -->
                  <div class="jimusyo_03">
                      <h3 class="jimusyo_sub_title"><img src="../assets/images/jimusyo_03.png" alt=""></h3>
                      <p>会社設立には株式会社・合同会社・外国会社の支店設立など数種類あります。また、行う業務によってそれぞれに適した形態の会社あるいは法人を設立することが重要です。経営者の方にとって各種届出や許可申請は大きな負担になります。経験豊かな当事務所にお任せください。</p>
                  </div>
              </div>
              <div class="jimusyo_04 clearfix">
                  <p class="jimusyo_img pc_only"><img src="../assets/images/jimusyo.jpg" alt=""></p>
                  <p class="jimusyo_img sp_only"><img src="../assets/images/jimusyo.jpg" alt=""></p>
                  <p class="jimusyo_text">それぞれの場面の大切なお手続きの中で、司法書士のみが担当できる業務は限られております。<br>私たちリーガルコンタクトは税理士や土地家屋調査士、行政書士等、他の士業や各種法人と提携し、協力することで、お客様にとって最善の方法を提案し、最短かつ安心できるサービスを提供いたします。</p>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style>
/* section１事務所について */
h2.jimusyo_title {
    background: url("../assets/../assets/images/jimusyoTitleBg_pc.jpg") 0 0 / cover repeat;
    text-align: center;
    padding-top: 10px;
    height: 40px;
}

.jimusyo_01>p,
.jimusyo_02>p,
.jimusyo_03>p {
    letter-spacing: 1px;
    line-height: 27px;
    padding: 20px 0 10px 0;
    margin: 10% 0;
}

h2.jimusyo_title::before {
    display: none;
}

.jimusyo_04 {
    background: linear-gradient(175deg, #4FD1D9 30%, rgba(70, 128, 198, 0.5));
    color: #fff;
    font-size: 16px;
}

p.jimusyo_text {
    margin: 5% 0;
    color: #fff;
    padding: 3%;
    line-height: 32px;
}

p.hukidasi {
    /* background: url("../assets/../assets/images/hukidasi_sp.png") 0 0 / cover repeat; */
    width: 100%;
    height: 168px;
    display: block;
    margin-bottom: 30px;
}

section.section_1 {
    margin-top: 0;
}

.section_1 div.inner {
    padding: 0;
}

@media screen and (min-width:768px) {
    section.section_1 {
      margin-top: 50px;
  }

  /* section１事務所について */
    h2.jimusyo_title {
        height: 50px;
    }

    .jimusyo_04 {
        display: flex;
        justify-content: space-between;
        padding-left: 5%;
    }

    .jimusyo_01_03 {
        margin-bottom: 50PX;
    }

    .jimusyo_sub_title {
        /* width: 300px; */
    }

    .jimusyo_img,
    .jimusyo_text {
        width: 50%;
    }

    .jimusyo_img {
        position: relative;
    }

    .jimusyo_img img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: -webkit-fill-available;
    }

    .jimusyo_01,
    .jimusyo_02,
    .jimusyo_03 {
        width: 30%;
        float: left;
    }

    .jimusyo_02,
    .jimusyo_03 {
        margin-left: 5%;
    }

    p.jimusyo_text {
        padding: 0 30px;
        line-height: 40px;
    }
}
</style>
