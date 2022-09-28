let itemHeader = {
  template: `
  <header class="header">
  <div class="header_inner">
      <h1><a href="#html"><img src="images/logo_blue.png" alt="リーガルコンタクト"></a></h1>
      <div id="hamburger" class="hamburger sp_only" @click="navShow"><img src="images/hamburger_menu.png" alt="メニューアイコン"></div>
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
              <span class="flexbtn_icon"><img src="images/icon/mail.svg" alt=""></span>
              メールで相談する
          </p>
      </div>
      <div class="flexbtn_2 rink_btn">
          <a href="tel:0474011817">
              <p class="flexbtn_text">
                  <span class="flexbtn_icon"><img src="images/icon/call.svg" alt=""></span>
                  電話で相談する</p>
          </a>
      </div>
  </div>

  <transition name="spnav">
    <div class="sp_only section_9" v-if="isShow">
      <div class="nav_header">
          <h1><a href="#top"><img src="images/logo_white.png" alt="リーガルコンタクト"></a></h1>
          <div id="cross" class="cross"><img src="images/cross.png" alt="クロスアイコン" @click="navClose"></div>
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

  <modal v-if="modal"
    v-on:modalClose="modalClose">
  </modal>
  </header>
  `,
  data: () => {
    return {
      isShow: false,
      modal: false
    }
  },
  components: {
    'modal': modal
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
      this.modal = true;
    },
    // モーダル非表示
    modalClose: function () {
      this.modal = false;
    }
  }
};
