<template>
  <section id="section_4" class="section_4">
      <div class="inner">
          <h2>業務内容</h2>
          <div class="contents">
              <div class="business">
                  <div class="business_img">
                      <h3 class="business_title">相続関連業務</h3>
                  </div>
                  <p class="business_text">遺言、相続登記、遺産承継等の相続に関連するお手続のご相談を承ります。相続税、不動産の売却等も弊所提携の信頼できるパートナーをご紹介いたします。</p>
              </div>
              <div class="business">
                  <div class="business_img">
                      <h3 class="business_title">法人登記</h3>
                  </div>
                  <p class="business_text">会社の設立、役員変更、組織再編等法人に関する登記のご相談を承ります。提携税理士・行政書士と法務・税務・許認可等を連動してサポートしいたします。</p>
              </div>
              <div class="business">
                  <div class="business_img">
                      <h3 class="business_title">不動産登記</h3>
                  </div>
                  <p class="business_text">不動産の売買・贈与、住宅ローンのお借換、その他不動産に関する登記のご相談を承ります。</p>
              </div>
              <div class="business">
                  <div class="business_img">
                      <h3 class="business_title">各種裁判業務</h3>
                  </div>
                  <p class="business_text">後見人の申立て、債権の回収等の裁判に関連する業務のご相談を承ります。</p>
              </div>
              <div class="business">
                  <div class="business_img">
                      <h3 class="business_title">民事信託</h3>
                  </div>
                  <p class="business_text">資産の管理、高齢者認知症対策、配偶者亡き後の問題等、皆様が不安に感じることのご相談を承ります。</p>
              </div>
              <div class="business">
                  <div class="meetingfree">
                      <p class="meetingfree_text">ご相談は<span class="red">無料</span>です。<br>お気軽にお問い合わせください。</p>
                      <p class="meetingfree_img"><img src="../assets/images/gyoumu_6_icon.png" alt=""></p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'business'
}
</script>

<style>
div.business .business_img {
    width: 100%;
    height: 196px;
    display: block;
}

.business_title {
    display: inline-block;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 3px;
    width: 150px;
    text-align: center;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    margin: 10px 0 0 10px;
    background-color: rgba(255, 255, 255, 0.8);
}

div.business .business_text {
    width: 100%;
    background-color: rgba(196, 196, 196, 0.1);
    padding: 10px;
    line-height: 30px;
    letter-spacing: 1px;
}

div.business:nth-of-type(1) .business_img {
    background: url("../assets/../assets/images/gyoumu_1.png") 0 0 / cover no-repeat;
}

div.business:nth-of-type(2) .business_img {
    background: url("../assets/../assets/images/gyoumu_2.png") 0 0 / cover no-repeat;
}

div.business:nth-of-type(3) .business_img {
    background: url("../assets/../assets/images/gyoumu_3.png") 0 0 / cover no-repeat;
}

div.business:nth-of-type(4) .business_img {
    background: url("../assets/../assets/images/gyoumu_4.png") 0 0 / cover no-repeat;
}

div.business:nth-of-type(5) .business_img {
    background: url("../assets/../assets/images/gyoumu_5.png") 0 0 / cover no-repeat;
}

div.business .meetingfree {
    position: relative;
    width: 100%;
    height: 218px;
    display: flex;
    justify-content: center;
    /* background-color: rgba(255, 255, 255, 0.8); */
    background-color: rgba(88, 155, 236, 0.5);
    padding-top: 1em;
}

div.business .meetingfree_img {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 25%;
}

.meetingfree .meetingfree_text {
    padding-top: 34px;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 10%);
}

.meetingfree .meetingfree_text {
    background-color: rgba(255, 255, 255, 0.8);
    line-height: 30px;
    width: 90%;
    height: 60%;
    text-align: center;
    border-radius: 1px;
}

.business:nth-of-type(1),
.business:nth-of-type(2),
.business:nth-of-type(3),
.business:nth-of-type(4),
.business:nth-of-type(5) {
    margin-bottom: 30px;
}

@media screen and (min-width:768px) {
      /* section4 業務内容 */
    .business {
        width: 32%;
        float: left;
        background-color: rgba(196, 196, 196, 0.1);
        ;
    }

    .business:nth-of-type(2),
    .business:nth-of-type(3),
    .business:nth-of-type(5),
    .business:nth-of-type(6) {
        margin-left: 2%;
    }

    .business:nth-of-type(1),
    .business:nth-of-type(2),
    .business:nth-of-type(3) {
        margin-bottom: 30px;
    }

    .business_title {
        background-color: rgba(255, 255, 255, 0.6);
    }

    div.business .business_text {
        height: 200px;
    }

    div.business .meetingfree {
        height: 396px;
    }

    div.business .meetingfree_img {
        width: 45%;
    }

    .meetingfree .meetingfree_text {
        font-size: 18px;
        height: 40%;
    }
}
</style>
