<template>
<section id="section_6" class="section_6">
  <div class="inner">
      <h2>アクセス</h2>
      <div class="contents">
          <div class="map pc_only">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.222783353338!2d139.98683785068997!3d35.696134936664784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187fda16e842ab%3A0x3ffdd9e2f12a9a48!2z44CSMjczLTAwMDUg5Y2D6JGJ55yM6Ii55qmL5biC5pys55S677yT5LiB55uu77yR77yZ4oiS77yS!5e0!3m2!1sja!2sjp!4v1622167266966!5m2!1sja!2sjp" width="1000" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="map sp_only">
              <div class="map_inner"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.222783353338!2d139.98683785068997!3d35.696134936664784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187fda16e842ab%3A0x3ffdd9e2f12a9a48!2z44CSMjczLTAwMDUg5Y2D6JGJ55yM6Ii55qmL5biC5pys55S677yT5LiB55uu77yR77yZ4oiS77yS!5e0!3m2!1sja!2sjp!4v1622167266966!5m2!1sja!2sjp" width="320" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>
          </div>
          <div class="map_element">
              <p class="map_element_title">司法書士小山合同事務所</p>
              <p class="map_element_img"></p>
          </div>
          <!-- pcテーブル -->
          <table class="element_table pc_only">
              <tr>
                  <th rowspan="2"><img src="../assets/images/icon/office.svg" alt="office_icon"></th>
                  <td>〒273-0005</td>
                  <th rowspan="2"><img src="../assets/images/icon/train.svg" alt="train_icon"></th>
                  <td>ＪＲ総武線船橋駅から徒歩10分</td>
              </tr>
              <tr>
                  <td>千葉県船橋市本町3-19-2</td>
                  <td>京成船橋駅から徒歩７分</td>
              </tr>
          </table>
          <!-- spテーブル -->
          <table class="element_table sp_only">
              <tr>
                  <th rowspan="2"><img src="../assets/images/icon/office.svg" alt="office_icon"></th>
                  <td>〒273-0005</td>
              <tr>
                  <td>千葉県船橋市本町3-19-2</td>
              </tr>
              <tr class="tr_boder">
                  <th rowspan="2"><img src="../assets/images/icon/train.svg" alt="train_icon"></th>
                  <td>ＪＲ総武線船橋駅から徒歩10分</td>
              </tr>
              <tr>
                  <td>京成船橋駅から徒歩７分</td>
              </tr>
          </table>
      </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'access'
}
</script>

<style>
/* section6 アクセス */
.map {
    text-align: right;
}

.map_element_img {
    content: "";
    background: url("../assets/../assets/images/logo_black.png") 0 0 / cover no-repeat;
    display: inline-block;
    width: 232px;
    height: 26px;
}

.map.sp_only {
    background-color: rgba(90, 202, 217, 0.2);
}

.map.sp_only>.map_inner {
    margin: 1% auto;
    width: 320px;
}

.map_element {
    margin: 30px 0 0 0;
    width: 300px;
}

/* map table */
.section_6>.inner>.contents>table {
    border-collapse: collapse;
    margin-top: 20px;
}

.section_6>.inner>.contents>table>tbody>tr>th,
.section_6>.inner>.contents>table>tbody>tr>td {
    color: #444;
    vertical-align: inherit;
}

.section_6>.inner>.contents>table>tbody>tr>th {
    text-align: center;
    width: 13%;
}

.section_6>.inner>.contents>table>tbody>tr>th img {
    width: 30px;
}

.section_6>.inner>.contents>table>tbody>.tr_boder {
    border-top: 15px solid rgba(0, 0, 0, 0);
}

.section_6 div.inner {
    padding: 0;
}

.section_7>.inner>.contents>table>tbody>tr>th,
.section_7>.inner>.contents>table>tbody>tr>td {
    line-height: 20px;
    padding: 20px 5px;
    font-size: 15px;
}

@media screen and (min-width:768px) {
      /* section6 アクセス */
    .map_element {
        margin: 40px auto 0 auto;
        width: 391px;
    }

    .map_element_img {
        width: 400px;
        height: 40px;
        margin-left: -10px;
    }

    /* map table */
    .section_6>.inner>.contents>table {
        width: 55%;
        margin: 30px auto 0 auto;
    }

    .section_6>.inner>.contents>table>tbody>tr>th img {
        width: 40px;
    }
}
</style>
