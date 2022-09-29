<template>
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
  </div>
</template>

<script>
export default {
  name: 'modal',
  data: () => {
    return {
      isShow: false,
      modal: false
    }
  },
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
}
</script>

<style>
/* お問い合わせモーダル */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
.formbox {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
}
.formbox h3,
.formbox p {
  text-align: center;
}

.formbox h3 {
  font-size: 24px;
  margin: 0 0 10px;
}

.formbox input[type=text],
.formbox input[type=tel],
.formbox input[type=email],
.formbox textarea {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 10px;
}

.formbox table {
  width: 100%;
  margin: 20px 0;
  table-layout: fixed;
}
.formbox table th,
.formbox table td {
  width: 100%;
  display: block;
}

.formbox table th {
  padding: 0 0 5px 0;
  font-size: 14px;
}
.formbox table td {
  padding: 0 0 20px 0;
}

/* .formbox table th {
  width: 100%;
} */

.formbox .zip {
  width: 30%;
  min-width: 100px;
  margin: 0 5px;
}

.formbox .address {
  width: 100%;
  margin: 10px 0 0 0;
}

.formbox textarea {
  width: 100%;
}
.formbox .req {
  display: inline-block;
  font-size: 11px;
  font-weight: normal;
  background-color: #f77070;
  color: #fff;
  margin: 0 0 0 5px;
  padding: 3px 5px;
  border-radius: 3px;
  vertical-align: bottom;
}
.formbox .anno {
  color: #aaa;
  text-align: left;
  font-size: 12px;
  margin: 3px 0 0 0;
}
.formbox .err {
  color: #f00;
  text-align: left;
  font-size: 12px;
  margin: 3px 0 0 0;
}
.formbox .errbox {
  border: 1px solid #f99e9e !important;
  background-color: #ffeaea;
}

.formbox input[type=submit] {
  width: 60%;
  background-color: #2196f3;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
}

.formbox input[type=submit]:hover {
  opacity: 0.7;
}

.close {
  position: absolute;
  right: -10px;
  top: -10px;
  border: 3px solid #fff;
  border-radius: 50em;
  background-color: #333;
  color: #fff;
  width: 30px;
  height: 30px;
  text-align: center;
}

.close:hover {
  background-color: #e43434;
}

@media screen and (min-width:768px) {
    /* お問い合わせモーダル */
    .formbox table th,
    .formbox table td {
      padding: 10px;
      display: table-cell;
    }
    .formbox table th {
      width: 30%;
    }
    .formbox table td {
      width: 70%;
    }
}
</style>
