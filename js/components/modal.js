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
            <th>お名前</th>
            <td>
              <input type="text"/>
              <p class="err">入力してください</p>
            </td>
          </tr>
          <tr>
            <th>メールアドレス</th>
            <td>
              <input type="email"/>
              <p class="err">入力してください</p>
            </td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>
              <input type="tel"/>
              <p class="err">入力してください</p>
            </td>
          </tr>
          <tr>
            <th>ご住所</th>
            <td>
              〒<input type="text" class="zip"/>
              <input type="text" class="address" />
              <p class="err">入力してください</p>
            </td>
          </tr>
          <tr>
            <th>お問い合わせ内容</th>
            <td>
              <textarea rows="5"></textarea>
              <p class="err">入力してください</p>
            </td>
          </tr>
          </table>
        <p><input type="submit" value="送信"></p>
      </form>
    </div>
    <div id="modal-overlay"></div>
  </div>
  `
};
