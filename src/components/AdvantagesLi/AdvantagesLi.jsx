// eslint-disable-next-line react/prop-types
export const AdvantagesLi = ({ title, describe, className }) => (
  <li className={`advantages__item ${className}`} >
    <h3 className="advantages__subtitle">{title}</h3>
    <p className="advantages__text">{describe}</p>
  </li>
);
