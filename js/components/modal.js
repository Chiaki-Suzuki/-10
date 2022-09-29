let modal = {
  template: `
  <div class="modal">
    <div class="formbox">
      <button class="close" @click="$emit('modalClose')">×</button>
      <h3>ご相談フォーム</h3>
      <p>必要事項を入力してください。</p>
      <form>
        <table>
          <tr>
            <th>お名前<span class="req">必須</span></th>
            <td>
              <input type="text"
                v-model.lazy="name"
                @blur="nameCheck"
                :class="{errbox: nameErr}" />
              <p class="err" v-if="nameErr">{{ nameErrMsg }}</p>
            </td>
          </tr>
          <tr>
            <th>メールアドレス<span class="req">必須</span></th>
            <td>
              <input type="email"
              v-model.lazy="email"
              @blur="emailCheck"
              :class="{errbox: emailErr}" />
              <p class="err" v-if="emailErr">{{ emailErrMsg }}</p>
            </td>
          </tr>
          <tr>
            <th>電話番号<span class="req">必須</span></th>
            <td>
              <input type="tel"
                v-model.lazy="tel"
                @blur="telCheck"
                :class="{errbox: telErr}" />
              <p class="err" v-if="telErr">{{ telErrMsg }}</p>
            </td>
          </tr>
          <tr>
            <th>ご住所<span class="req">必須</span></th>
            <td>
              〒<input type="text"
                class="zip"
                name="postal"
                onchange="AjaxZip3.zip2addr(this, '', 'address', 'address')" />
              <input type="text"
                class="address"
                name="address"
                v-model.lazy="address"
                @change="addressCheck"
                :class="{errbox: addressErr}" />
              <p class="anno">※郵便番号を入力すると自動で住所が入力されます</p>
              <p class="err" v-if="addressErr">入力してください</p>
            </td>
          </tr>
          <tr>
            <th>お問い合わせ内容<span class="req">必須</span></th>
            <td>
              <textarea rows="5"
                v-model.lazy="sub"
                @blur="subCheck"
                :class="{errbox: subErr}">
              </textarea>
              <p class="err" v-if="subErr">入力してください</p>
            </td>
          </tr>
          </table>
        <p><input type="submit" value="送信"></p>
      </form>
    </div>
    <div id="modal-overlay"></div>
  </div>
  `,
  data: () => {
    return {
      name: '',
      nameErr: false,
      nameErrMsg: '入力してください',
      email: '',
      emailErr: false,
      emailErrMsg: '入力してください',
      tel: '',
      telErr: false,
      telErrMsg: '入力してください',
      address: '',
      addressErr: false,
      sub: '',
      subErr: false,
    }
  },
  methods: {
    // 名前のバリデーションチェック
    nameCheck: function () {
      // 空の時
      if (this.name === '') {
        this.nameErr = true;
        this.nameErrMsg = '入力してください'
      }
      // 数字・記号が含まれているとき
      else if (this.name.match(/[0-9０-９ -/:-\[-~！-／：-＠［-｀｛-～、-〜”’・]/)) {
        this.nameErr = true;
        this.nameErrMsg = '数字・記号は使用できません'
      }
      // エラーなし
      else {
        this.nameErr = false;
      }
    },
    // メールアドレスのバリデーションチェック
    emailCheck: function () {
      // 空の時
      if (this.email === '') {
        this.emailErr = true;
        this.emailErrMsg = '入力してください'
      }
      // 数字以外が含まれているとき
      else if (!this.email.match(/.+@.+\..+/)) {
        this.emailErr = true;
        this.emailErrMsg = 'メールアドレスが不正です'
      }
      // エラーなし
      else {
        this.emailErr = false;
      }
    },
    // 電話番号のバリデーションチェック
    telCheck: function () {
      // 空の時
      if (this.tel === '') {
        this.telErr = true;
        this.telErrMsg = '入力してください'
      }
      // 数字以外が含まれているとき
      else if (!this.tel.match(/^[0-9]+$/)) {
        this.telErr = true;
        this.telErrMsg = '半角数字以外は使用できません'
      }
      // エラーなし
      else {
        this.telErr = false;
      }
    },
    // 住所入力チェック
    addressCheck: function () {
      console.log(this.address)
      // 空の時
      if (this.address === '') {
        this.addressErr = true;
      }
      // エラーなし
      else {
        this.addressErr = false;
      }
    },
    // 住所入力チェック
    subCheck: function() {
      // 空の時
      if (this.sub === '') {
        this.subErr = true;
      }
      // エラーなし
      else {
        this.subErr = false;
      }
    },
  }
};
