import { Container } from '../../views/Container/Container';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';

export const Subscribe = () => (
  <section className="subscribe">
    <Container className="container subscribe__container" >
      <h2 className="subscribe__title">Подпишись на&nbsp;рассылку и&nbsp;узнавай о&nbsp;новинках первым!</h2>
      <SubscribeForm />
    </Container>
  </section>
);