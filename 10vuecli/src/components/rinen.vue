<template>
  <section id="section_2" class="section_2">
  <div class="inner">
      <h2>経営理念</h2>
      <div class="contents">
          <div class="rinen">
              <h3>誠実に対応する</h3>
              <p class="rinen_text">誠意をもってお客様と接し、丁寧かつ迅速な対応をお約束いたします。</p>
              <p class="rinen_img"></p>
          </div>
          <div class="rinen">
              <h3>コミュニケーションを大切にする</h3>
              <p class="rinen_text">お客様と意思疎通を十分に図り、お客様の思いやご要望の本質的な理解に努めます。</p>
              <p class="rinen_img"></p>
          </div>
          <div class="rinen">
              <h3>常に提案を心掛ける</h3>
              <p class="rinen_text">「何か改善できるところはないか」「有利な選択をできるものはないか」を常に意識し、付加価値の高いサービスを提供します。</p>
              <p class="rinen_img"></p>
          </div>
      </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'rinen'
}
</script>

<style>
/* section2 経営理念 */
div.rinen {
    border: 1px solid rgba(88, 155, 236, 0.5);
    overflow: hidden;
    padding: 20px 18px;
}

.section_2>.inner>.contents {
    overflow: hidden;
}

div.rinen::after {
    clear: both;
}

div.rinen>h3 {
    color: #3e77bd;
    background: rgba(88, 155, 236, 0.5);
    text-align: center;
    height: 35px;
    padding-top: 9px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
}

div.rinen p.rinen_text {
    float: left;
    line-height: 25px;
    margin-top: 7%;
}

div.rinen p.rinen_img {
    width: 100%;
    float: right;
    display: block;
    margin-top: 3%;
    height: 140px;
}

div.rinen:nth-of-type(1) p.rinen_img {
    background: url("../assets/../assets/images/rinen1.jpg") 0 0 / cover no-repeat;
    background-position: bottom;
}

div.rinen:nth-of-type(2) p.rinen_img {
    background: url("../assets/../assets/images/rinen3.jpg") 0 0 / cover no-repeat;
}

div.rinen:nth-of-type(3) p.rinen_img {
    background: url("../assets/../assets/images/rinen2.jpg") 0 0 / cover no-repeat;
}

div.rinen p.rinen_img:last-of-type::after {
    clear: both;
}

div.rinen:nth-child(2),
div.rinen:nth-child(3) {
    margin-top: 6%
}

@media screen and (min-width:768px) {
      /* section2 経営理念 */
    div.rinen {
        width: 33%;
        float: left;
        padding: 20px 25px;
    }

    div.rinen:nth-child(1),
    div.rinen:nth-child(2) {
        margin-right: 0.5%
    }

    div.rinen:nth-child(2),
    div.rinen:nth-child(3) {
        margin-top: 0;
    }

    div.rinen p.rinen_text,
    div.rinen p.rinen_img {
        margin-top: 20px;
    }

    div.rinen p.rinen_text {
        height: 90px;
    }

    div.rinen p.rinen_img {
        height: 180px;
    }
}
</style>
