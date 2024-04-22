export const SubscribeForm = () => (
  <form className="subscribe__form" action="#" method="post">
    <fieldset className="subscribe__field">
      <input className="subscribe__input" type="email" name="email" placeholder="E-mail" />
      <button className="subscribe__btn" type="submit"><span>Отправить</span></button>
    </fieldset>
  </form>
);