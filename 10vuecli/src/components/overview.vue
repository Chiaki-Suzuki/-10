<template>
  <section id="section_7" class="section_7">
      <div class="inner">
          <h2>事務所概要</h2>
          <div class="contents">
              <table>
                  <tr>
                      <th>事務所名</th>
                      <td>LEGAL&nbsp;CONTACT<br>司法書士小山合同事務所</td>
                  </tr>
                  <tr>
                      <th>所在地</th>
                      <td>〒273-0005<br>千葉県船橋市本町3-19-2</td>
                  </tr>
                  <tr>
                      <th id="call">ＴEL</th>
                      <td><a href="tel:0474011817">047-401-1817</a></td>
                  </tr>
                  <tr>
                      <th>ＦＡＸ</th>
                      <td>047-401-7279</td>
                  </tr>
                  <tr>
                      <th id="mail">mail</th>
                      <td><a href="mailto:koyamajimusyo@legal-contact.com">koyamajimusyo@legal-contact.com</a></td>
                  </tr>
                  <tr>
                      <th>設立</th>
                      <td>2017年1月</td>
                  </tr>
                  <tr>
                      <th>司法書士</th>
                      <td>小山&nbsp;寿雄</td>
                  </tr>
                  <tr>
                      <th>登録番号</th>
                      <td>千葉司法書士会<span class="pc_only">&nbsp;</span><span class="sp_only"><br></span>第１５１９号</td>
                  </tr>
                  <tr>
                      <th>簡易裁判訴訟代理認定番号</th>
                      <td>第１３０１０３０号</td>
                  </tr>
                  <tr>
                      <th>その他提<span class="sp_only"><br></span>サービス</th>
                      <td>遺言・相続<span class="sp_only"><br></span>サポートセンター</td>
                  </tr>
              </table>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'overview'
}
</script>

<style>
/* section7 事務所概要 */
.section_7>.inner>.contents>table {
    border-collapse: collapse;
    width: 100%;
}

.section_7>.inner>.contents>table>tbody>tr>th,
.section_7>.inner>.contents>table>tbody>tr>td {
    border: 1px solid rgba(104, 152, 209, 0.7);
    color: #444;
}

@media screen and (min-width:768px) {
      /* section7 事務所概要 */

    .section_7>.inner>.contents>table>tbody>tr>th,
    .section_7>.inner>.contents>table>tbody>tr>td {
        line-height: 18px;
    }

    .section_7>.inner>.contents>table>tbody>tr>th {
        padding: 30px 20px;
        font-size: 18px;
    }

    .section_7>.inner>.contents>table>tbody>tr>td {
        padding: 30px 210px 30px 20px;
        font-size: 15px;
    }
}
</style>
