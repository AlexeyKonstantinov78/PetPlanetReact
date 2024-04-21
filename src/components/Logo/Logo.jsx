import logo from './img/logo.svg';

// eslint-disable-next-line react/prop-types
export const Logo = ({ className }) => (
  <img className={className} src={logo} alt="Логотип магазина PetPlanet" />
);