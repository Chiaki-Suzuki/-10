<template>
  <section id="section_3" class="section_3">
  <div class="inner">
      <h2 class="daihyou_title">代表挨拶</h2>
      <div class="contents clearfix">
          <div class="daihyou">
              <p class="daihyou_img"></p>
              <p class="daihyou_name_sp sp_only">
                  <span class="name_1">代表司法書士</span>
                  <span class="name_2">小山 寿雄</span>
              </p>
          </div>
          <p class="daihyou_text clearfix">
              お客様が日常生活を送るうえで直面する<span class="yellowline">様々な問題を解決するのが専門職の仕事</span>です。<br>
              しかし、どの問題をどの専門職に依頼をすればいいのかが不明確であり、また依頼はしたけれど職務範囲が違う部分には対応してくれないといったケースも考えられます。<br>
              <br>
              私たちリーガルコンタクトは他の専門職と連携し、ひとつの窓口で問題解決を図り、<span class="yellowline">お客様の心の負担を少しでも軽くできれば</span>と考えております。<br>
              <br>
              お客様の目線に立ち、親切・丁寧な対応を心がけ、<span class="yellowline">心から信頼いただける事務所</span>を目指してまいります。
          </p>
          <p class="daihyou_name_pc pc_only clearfix">
              <span class="name_1">代表司法書士</span>
              <span class="name_2">小山 寿雄</span>
          </p>
      </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'message'
}
</script>

<style>
/* section3 代表挨拶 */
.section_3>.inner {
    border: 5px solid rgba(88, 155, 236, 0.5);
    padding-bottom: 0;
}

h2.daihyou_title {
    text-align: center;
    margin: 0 auto;
    margin-top: -60px;
    background-color: #fff;
    width: 250px;
}

h2.daihyou_title::before {
    display: none;
}

p.daihyou_img {
    display: inline-block;
    background: url("../assets/../assets/images/daihyo.png") 0 0 / cover no-repeat;
    width: 120px;
    height: 140px;
}

.yellowline {
    background: linear-gradient(transparent 60%, #ff6 60%)
}

.section_3 .contents {
    margin: 50px 20px;
}

.daihyou_text {
    line-height: 27px;
    overflow: hidden;
    margin-top: 30px;
}

.daihyou_name_sp {
    letter-spacing: 6px;
    display: inline-block;
    float: right;
    height: 140px;
    padding-top: 30px;
}

.name_1,
.name_2 {
    font-size: 20px;
    display: block;
    line-height: 46px;
}

.name_1 {
    font-size: 13px;
    letter-spacing: 4px;
}

.name_2 {
    font-size: 20px;
    letter-spacing: 6px;
    margin-top: -20px;
}

@media screen and (min-width:768px) {
      /* section3 代表挨拶 */
    .section_3 .contents {
        margin: 50px;
    }

    .daihyou {
        display: inline-block;
    }

    p.daihyou_img {
        background: url("../assets/../assets/images/daihyo.png") 0 0 / cover no-repeat;
        width: 280px;
        height: 320px;
        margin-top: 30px;
    }

    .daihyou_name_pc,
    .daihyou_text {
        float: right;
    }

    .daihyou_text {
        line-height: 27px;
        /* width: 630px; */
        width: 60%;
    }

    .daihyou_name_pc {
        margin-top: -5px;
        width: 100%;
        text-align: right;
    }

    .name_1 {
        font-size: 13px;
        letter-spacing: 4px;
    }

    .name_2 {
        font-size: 20px;
        letter-spacing: 6px;
        margin-top: -20px;
    }
}
</style>
