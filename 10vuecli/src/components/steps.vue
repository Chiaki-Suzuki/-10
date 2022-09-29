<template>
  <section id="section_5" class="section_5">
  <div class="inner">
      <h2>ご依頼の流れ</h2>
      <div class="contents">
          <div class="steps">
              <h3 class="step_title">
                  <span class="step">STEP 1</span>
                  お問い合わせ
              </h3>
              <p class="step_text">まずはお気軽に電話またはメールにてお問い合わせください。</p>
              <p class="step_icon"></p>
              <div class="contact_address">
                  <a href="tel:0474011817">
                  <p class="icon_call rink_btn">０４７－４０１－１８１７</p></a>
              </div>
              <div class="contact_address">
                  <a href="mailto:koyamajimusyo@legal-contact.com">
                  <p class="icon_mail rink_btn">koyamajimusyo@legal-contact.com</p></a>
              </div>
              <p class="step_text2">お客様が相談したい内容を大まかにご説明いただき、ご面談の日程を調整いたします。</p>
          </div>
          <div class="triangle"></div>
          <div class="steps">
              <h3 class="step_title">
                  <span class="step">STEP 2</span>
                  ご面談
              </h3>
              <p class="step_text">３０分から１時間程度のご面談にて、ご相談内容の詳細をお伺いします。初回の相談は無料です。出張も致します。</p>
              <p class="step_icon"></p>
          </div>
          <div class="triangle"></div>
          <div class="steps">
              <h3 class="step_title">
                  <span class="step">STEP 3</span>
                  ご提案・お見積り
              </h3>
              <p class="step_text">お客様にご要望にあったサービスをご提案し、お見積もりをご案内いたします。
                  <br>※案件の内容によってはお見積もりの概算となる場合がございます。</p>
              <p class="step_icon"></p>
          </div>
          <div class="triangle"></div>
          <div class="steps">
              <h3 class="step_title">
                  <span class="step">STEP 4</span>
                  ご契約
              </h3>
              <p class="step_text">ご提案内容・お見積もりにご満足いただけましたら正式にご依頼をお受けいたします。</p>
              <p class="step_icon"></p>
          </div>
          <div class="triangle"></div>
          <div class="steps">
              <h3 class="step_title">
                  <span class="step">STEP 5</span>
                  業務開始
              </h3>
              <p class="step_text">随時、状況を報告し、お客様と方向性の確認をしながら、よりお客様のご要望に沿ったサービスを提供いたします。</p>
              <p class="step_icon"></p>
          </div>
          <div class="triangle"></div>
          <div class="steps">
              <h3 class="step_title">
                  <span class="step">STEP 6</span>
                  目的の達成
              </h3>
              <p class="step_text">業務終了のご報告をいたします。アフターフォローもお任せください。</p>
              <p class="step_icon"></p>
          </div>
      </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'steps'
}
</script>

<style>
/* section5 ご依頼の流れ */
.steps,
.contact_address .icon_call,
.contact_address .icon_mail,
.step_text,
.step_text2 {
    color: #fff;
}

.steps,
.contact_address,
.step_text,
.step_text2 {
    margin-top: 40px;
}

.steps {
    margin: 0 auto;
    margin-top: 30px;
    background-color: #326EB1;
    text-align: center;
    padding: 50px 16px;
}

.step_title {
    /* font-size: 25px; */
    font-size: 20px;
}

.steps .icon_call::before {
    background: url("../assets/../assets/images/icon/call.svg") 0 0 / contain no-repeat;
    width: 30px;
    height: 50px;
    width: 24px;
    height: 46px;
    margin: 0 10px -31px 10px;
}

.steps .icon_mail::before {
    background: url("../assets/../assets/images/icon/mail.svg") 0 0 / contain no-repeat;
    width: 23px;
    height: 46px;
    margin: 0 6px -31px 4px;
}


.steps:nth-of-type(1) .step_icon {
    background: url("../assets/../assets/images/icon/step1.svg") 0 0 / cover no-repeat;
    margin-bottom: 30px;
    width: 75px;
}

.steps:nth-of-type(3) .step_icon {
    background: url("../assets/../assets/images/icon/step2.svg") 0 0 / cover no-repeat;
    width: 70px;
}

.steps:nth-of-type(5) .step_icon {
    background: url("../assets/../assets/images/icon/step3.svg") 0 0 / cover no-repeat;
    width: 69px;
    height: 50px;
}

.steps:nth-of-type(7) .step_icon {
    background: url("../assets/../assets/images/icon/step4.svg") 0 0 / cover no-repeat;
    width: 55px;
    height: 55px;
}

.steps:nth-of-type(9) .step_icon {
    background: url("../assets/../assets/images/icon/step5.png") 0 0 / cover no-repeat;
    width: 60px;
    height: 70px;
}

.steps:nth-of-type(11) .step_icon {
    background: url("../assets/../assets/images/icon/step6.svg") 0 0 / cover no-repeat;
    width: 45px;
    height: 45px;
}

.section_5 div.inner {
    padding-top: 0;
}

.triangle {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border: 25px solid;
    border-color: #46C9DB transparent transparent transparent;
    margin: 30px auto -18px auto;
}

.step_text,
.step_text2 {
    letter-spacing: 2px;
    line-height: 24px;
}

.contact_address a {
    display: block;
}

.contact_address {
    border: 1px solid #fff;
    text-align-last: center;
    margin: 10px auto;
    line-height: 40px;
    background-color: #326EB1;
    width: 100%;
}

.steps .icon_call {
    font-size: 13px;
}

.steps .icon_mail {
    font-size: 12px;
}

.steps .icon_call::before,
.steps .icon_mail::before {
    content: "";
    display: inline-block;
    word-break: break-all;
}

.steps .step_icon {
    height: 40px;
    margin: 30px auto 10px auto;
}

@media screen and (min-width:768px) {
    /* section5 ご依頼の流れ */
    .steps {
        padding: 80px 50px;
    }

    .triangle {
        content: "";
        display: block;
        width: 0px;
        height: 0px;
        border: 30px solid;
        border-color: #46C9DB transparent transparent transparent;
        margin: 60px auto 0 auto;
    }

    .step_title {
        font-size: 25px;
    }

    .step_text,
    .step_text2 {
        letter-spacing: 2px;
        line-height: 24px;
    }

    .contact_address {
        border: 1px solid #fff;
        width: 400px;
        text-align-last: left;
        margin: 20px auto;
        line-height: 40px;
    }

    .contact_address a:hover {
        background-color: rgba(255, 255, 255, 0.452);
        color: #46C9DB;
    }

    .steps .icon_call::before,
    .steps .icon_mail::before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 50px;
        margin: 0 10px -31px 48px;
    }

    .steps .step_icon {
        height: 50px;
        margin: 50px auto 10px auto;
    }

    .steps:nth-of-type(1) .step_icon {
        width: 90px;
    }

    .steps:nth-of-type(3) .step_icon {
        width: 80px;
    }

    .steps:nth-of-type(5) .step_icon {
        width: 76px;
        height: 56px;
    }

    .steps:nth-of-type(7) .step_icon {
        width: 70px;
        height: 70px;
    }

    .steps:nth-of-type(9) .step_icon {
        width: 70px;
        height: 80px;
    }

    .steps:nth-of-type(11) .step_icon {
        width: 60px;
        height: 62px;
    }
}
</style>
