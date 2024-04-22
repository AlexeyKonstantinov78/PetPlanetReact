import { Container } from '../../views/Container/Container';

export const About = () => (
  <section className="about">
    <Container className="container about__container" >
      <h2 className="about__title">О нас</h2>
      <div className="about__box">
        <div className="about__content">
          {/* <!--Кошка--> */}
          <p className="about__text">Мы&nbsp;&mdash; команда любящих и&nbsp;заботливых владельцев животных, которые
            с&nbsp;особым вниманием относятся к&nbsp;потребностям и&nbsp;радостям наших пушистых друзей.</p>
          <p className="about__text">Стремясь к&nbsp;тому, чтобы ваш питомец был здоровым, счастливым и&nbsp;полным
            энергии, мы&nbsp;предлагаем только лучшие товары и&nbsp;услуги, проверенные временем
            и&nbsp;рекомендованные ветеринарами.</p>
        </div>
      </div>
    </Container>
  </section>
);