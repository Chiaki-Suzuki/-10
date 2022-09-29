<template>
  <section class="nav_area">
    <ul class="nav_pc pc_only">
      <li class="rink_btn"><a href="#section_1">当事務所について</a></li>
      <li class="rink_btn"><a href="#section_2">経営理念</a></li>
      <li class="rink_btn"><a href="#section_3">代表挨拶</a></li>
      <li class="rink_btn"><a href="#section_4">業務内容</a></li>
      <li class="rink_btn"><a href="#section_5">ご依頼の流れ</a></li>
      <li class="rink_btn"><a href="#section_7">事務所概要</a></li>
      <li class="rink_btn"><a href="#section_6">アクセス</a></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'topnav'
}
</script>

<style>
section.nav_area {
    background-color: #46C9DB !important;
    opacity: 0.8;
}

@media screen and (min-width:768px) {
  section.nav_area {
      margin: 0;
  }

  ul.nav_pc {
      justify-content: center;
      display: flex;
  }

  ul.nav_pc li a {
      letter-spacing: 1px;
  }

  ul.nav_pc li:last-child {
      border-right: 2px solid #3bb7c7;
  }

  ul.nav_pc li {
      border-left: 2px solid #3bb7c7;
  }

  ul.nav_pc li a {
      color: #fff;
      font-size: 20px;
      padding: 24px 17px;
      display: block;
      text-align: center;
  }

  ul.nav_pc li:nth-of-type(7) a {
      border-right: unset;
  }

  section div.inner,
  ul.nav_pc {
      margin: 0 auto
  }
}
</style>
