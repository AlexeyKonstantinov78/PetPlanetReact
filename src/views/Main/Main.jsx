import { Hero } from '../../components/Hero/Hero';
import { Container } from '../Container/Container';

export const Main = () => (
  <main className="main">
    <Container className="container">
      <h1 className="visually-hidden">Pet Planet - магазин товаров для животных</h1>
    </Container>
    <Hero />
  </main>
);
