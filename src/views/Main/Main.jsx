import { About } from '../../components/About/About';
import { Advantages } from '../../components/Advantages/Advantages';
import { Hero } from '../../components/Hero/Hero';
import { Subscribe } from '../../components/Subscribe/Subscribe';
import { Container } from '../Container/Container';

export const Main = () => (
  <main className="main">
    <Container className="container">
      <h1 className="visually-hidden">Pet Planet - магазин товаров для животных</h1>
    </Container>
    <Hero />
    <About />
    <Advantages />
    <Subscribe />
  </main>
);
