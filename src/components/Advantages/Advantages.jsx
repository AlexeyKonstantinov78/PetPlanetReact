import { Container } from '../../views/Container/Container';

export const Advantages = () => (
  <section className="advantages">
    <div className="advantages__bg">
      <h2 className="advantages__title">Наши преимущества</h2>
      <Container className="container advantages__container" >
        <ul className="advantages__list">
          <li className="advantages__item advantages__item_dog-house">
            <h3 className="advantages__subtitle">Широкий ассортимент</h3>
            <p className="advantages__text">У&nbsp;нас есть все для того, чтобы сделать жизнь вашего любимца комфортной
              и&nbsp;уютной.
            </p>
          </li>
          <li className="advantages__item advantages__item_dog-fodder">
            <h3 className="advantages__subtitle">Качество и&nbsp;безопасность</h3>
            <p className="advantages__text">Мы&nbsp;тщательно отбираем товары для наших клиентов, уделяя особое внимание
              качеству и&nbsp;безопасности.
            </p>
          </li>
          <li className="advantages__item advantages__item_dog">
            <h3 className="advantages__subtitle">Персональный подход</h3>
            <p className="advantages__text">Мы&nbsp;понимаем, что каждый питомец уникален, поэтому предлагаем вам
              индивидуальные рекомендации по&nbsp;выбору товаров.</p>
          </li>
        </ul>
      </Container>
      <div className="advantages__count-box">
        <p className="advantages__count">10</p>
        <p className="advantages__count-text">магазинов в&nbsp;сети</p>
      </div>
    </div>
  </section>
);