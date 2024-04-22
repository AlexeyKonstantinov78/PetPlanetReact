import { Container } from '../../views/Container/Container';
import tittle from './img/tittle.svg';

export const Hero = () => (
  <section className="hero">
    <Container className="container hero__container">
      <h2 className="visually-hidden">Товары для твоих любимцев</h2>
      <img className="hero__img" src={tittle} alt="Заговловок Товары для твоих любимцев" />
      <p className="hero__text">Большой выбор домиков, лежанок и&nbsp;кормов для кошек и&nbsp;собак</p>
    </Container>
  </section>
);