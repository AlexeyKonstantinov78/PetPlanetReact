import { Logo } from '../../components/Logo/Logo';
import { Container } from '../Container/Container';

export const Header = () => (
  <header className="header">
    <Container className="container header__container">
      <Logo className="header__logo" />
    </Container>
  </header>
);