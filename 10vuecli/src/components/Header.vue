<template>
  <header class="header">
  <div class="header_inner">
      <h1><a href="#html"><img src="../assets/images/logo_blue.png" alt="リーガルコンタクト"></a></h1>
      <div id="hamburger" class="hamburger sp_only" @click="navShow"><img src="../assets/images/hamburger_menu.png" alt="メニューアイコン"></div>
      <div class="flexbtn pc_only">
          <div class="flexbtn_1" @click="modalShow">
              <p class="flexbtn_icon"></p>
              <p class="flexbtn_text">メールで相談</p>
          </div>
          <div class="flexbtn_2">
              <a href="tel:0474011817">
                  <p class="flexbtn_icon"></p>
                  <p class="flexbtn_text">電話で相談する<br><span>営業時間：9:00 〜</span></p>
              </a>
          </div>
      </div>
  </div>

  <div class="flexbtn sp_only">
      <div class="flexbtn_1 rink_btn" @click="modalShow">
          <p class="flexbtn_text">
              <span class="flexbtn_icon"><img src="../assets/images/icon/mail.svg" alt=""></span>
              メールで相談する
          </p>
      </div>
      <div class="flexbtn_2 rink_btn">
          <a href="tel:0474011817">
              <p class="flexbtn_text">
                  <span class="flexbtn_icon"><img src="../assets/images/icon/call.svg" alt=""></span>
                  電話で相談する</p>
          </a>
      </div>
  </div>

  <transition name="spnav">
    <div class="sp_only section_9" v-if="isShow">
      <div class="nav_header">
          <h1><a href="#top"><img src="../assets/images/logo_white.png" alt="リーガルコンタクト"></a></h1>
          <div id="cross" class="cross"><img src="../assets/images/cross.png" alt="クロスアイコン" @click="navClose"></div>
      </div>
      <div class="inner">
          <ul class="nav_sp">
              <li><a href="#section_1" @click="navClose">当事務所について</a></li>
              <li><a href="#section_2" @click="navClose">経営理念</a></li>
              <li><a href="#section_3" @click="navClose">代表挨拶</a></li>
              <li><a href="#section_4" @click="navClose">業務内容</a></li>
              <li><a href="#section_5" @click="navClose">ご依頼の流れ</a></li>
              <li><a href="#section_7" @click="navClose">事務所概要</a></li>
              <li><a href="#section_6" @click="navClose">アクセス</a></li>
          </ul>
      </div>
      <p><small>Copyright 2016&nbsp;LEGAL&nbsp;CONTACT&nbsp;司法書士小山合同事務所</small></p>
    </div>
  </transition>

  <modal v-if="isModal"
    v-on:modalClose="modalClose">
  </modal>
  </header>
</template>

<script>
import modal from '../components/modal.vue'

export default {
  name: 'Header',
  components: {
    modal
  },
  data: () => {
    return {
      isShow: false,
      isModal: false
    }
  },
  components: {
    modal
  },
  methods: {
    // spナビ表示
    navShow: function () {
      this.isShow = true;
    },
    // spナビ非表示
    navClose: function () {
      this.isShow = false;
    },
    // モーダル表示
    modalShow: function () {
      this.isModal = true;
    },
    // モーダル非表示
    modalClose: function () {
      this.isModal = false;
    }
  }
}
</script>

<style>
header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 9999;
  padding: 10px;
}

/* flexbtn メール・電話*/
.flexbtn_1 {
    background-color: #94B2D7;
}

.flexbtn_2 {
    background-color: #99DDC9;
}

/* sp */
header h1 {
    width: 61%;
}

.hamburger {
    width: 20px;
    height: 20px;
    position: fixed;
    top: 0;
    right: 0;
    margin: 11px 10px 10px 10px;
}

/* flexbtn メール・電話*/
.flexbtn.sp_only {
    display: flex;
    position: fixed;
    bottom: -1px;
    left: 0;
    margin-right: 10px;
    width: 100%;
}

.flexbtn.sp_only>.flexbtn_1,
.flexbtn.sp_only>.flexbtn_2 {
    width: 50%;
    height: 45px;
    text-align: center;
}

.flexbtn.sp_only .flexbtn_1 a,
.flexbtn.sp_only .flexbtn_2 a {
    display: inline-block;
    width: 90%;
    padding: 1% 4%;
}

.flexbtn.sp_only>.flexbtn_1 .flexbtn_icon,
.flexbtn.sp_only>.flexbtn_2 .flexbtn_icon,
.flexbtn.sp_only>.flexbtn_1 .flexbtn_icon img,
.flexbtn.sp_only>.flexbtn_2 .flexbtn_icon img {
    display: inline-block;
}

.flexbtn.sp_only>.flexbtn_1 .flexbtn_icon img,
.flexbtn.sp_only>.flexbtn_2 .flexbtn_icon img {
    display: inline-block;
}

.flexbtn.sp_only>.flexbtn_1 .flexbtn_icon {
    height: 21px;
    width: 14px;
}

.flexbtn.sp_only>.flexbtn_2 .flexbtn_icon {
    height: 25px;
    width: 19px;
}

.flexbtn.sp_only .flexbtn_text {
    color: #fff;
    text-align: center;
    display: inline-block;
    font-size: 13px;
    margin: 9% 0;
}

.flexbtn.sp_only .flexbtn_text span {
    font-size: 13px;
}

/* nav SPナビ*/
.section_9.sp_only {
    background: rgba(210, 215, 271, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* display: none; */
}

.section_9 div h1 {
    width: 61%;
    display: inline-block;
}

.section_9>.nav_header {
    padding: 10px;
    background-color: #589BEC;
}

.cross {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: fixed;
    top: 0;
    right: 0;
    margin: 10px 10px 0 10px;
}

.section_9 small {
    color: #fff;
}

.section_9 p {
    text-align: center;
    background-color: #589BEC;
    bottom: 0;
    position: fixed;
    width: 100%;
    padding: 20px 0;
    font-size: 10px;
}

ul.nav_sp {
    color: #1a4c89;
    /* color: #315787; */
    font-size: 22px;
    overflow: hidden;
}

ul.nav_sp li {
    border-bottom: 1px solid #183891b0;
}

ul.nav_sp li a {
    height: 50px;
    display: block;
    padding-top: 15px;
}

.section_9 {
    display: none;
    margin-top: 0px;
}

/* spナビ表示切替 */
.spnav-enter,
.spnav-leave-to {
  opacity: 0;
}

.spnav-enter-active,
.spnav-leave-active {
  transition: opacity .5s;
}

@media screen and (min-width:768px) {
  header {
      height: 85px;
  }

  header .header_inner {
      max-width: 1100px;
      margin: 0 auto;
  }

  header h1 {
      margin-top: 20px;
      display: inline-block;
      max-width: 47%;
  }

  header h1 a img {
      width: 350px;
      width: 80%;
  }

      /* flexbtn メール・電話*/
    .flexbtn.pc_only {
        float: right;
        margin-top: 10px;
        max-width: 53%;
    }

    .flexbtn.pc_only>.flexbtn_1,
    .flexbtn.pc_only>.flexbtn_2 {
        width: 189px;
        /* width: 223px; */
        height: 62px;
        display: inline-block;
        padding: 10px 0;
        border-radius: 2px;
    }

    .flexbtn.pc_only>.flexbtn_1 .flexbtn_icon,
    .flexbtn.pc_only>.flexbtn_2 .flexbtn_icon {
        display: inline-block;
        height: 35px;
        margin-top: 9px;
    }

    .flexbtn.pc_only>.flexbtn_1 .flexbtn_icon {
        display: inline-block;
        width: 27px;
        margin-left:19px;
        background: url("../assets/../assets/images/icon/mail.svg") 0 0 / contain no-repeat;
        margin-right: 5px;
    }
    .flexbtn.pc_only>.flexbtn_2 .flexbtn_icon{
        display: inline-block;
        width: 34px;
        margin-left: 4px;
        background: url("../assets/../assets/images/icon/call.svg") 0 0 / contain no-repeat;
    }

    .flexbtn.pc_only .flexbtn_text {
        color: #fff;
        font-size: 18px;
        text-align: center;
        display: inline-block;
        float: right;
    }

    .flexbtn.pc_only .flexbtn_1 .flexbtn_text {
        margin-top: 11px;
        margin-right: 30px;
        cursor: pointer;
    }

    .flexbtn.pc_only .flexbtn_2 .flexbtn_text {
        margin-top: 1px;
        margin-right: 19px;
    }

    .flexbtn.pc_only .flexbtn_text span {
        font-size: 13px;
    }
}
</style>
