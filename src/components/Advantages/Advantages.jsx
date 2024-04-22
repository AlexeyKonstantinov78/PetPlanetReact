import { Container } from '../../views/Container/Container';
import { AdvantagesLi } from '../AdvantagesLi/AdvantagesLi';

export const Advantages = () => {

  const arr = [
    {
      title: "Широкий ассортимент",
      describe: "У&nbsp;нас есть все для того, чтобы сделать жизнь вашего любимца комфортной и& nbsp; уютной.",
      className: "advantages__item_dog-house",
    },
    {
      title: "Качество и&nbsp;безопасность",
      describe: "Мы&nbsp;тщательно отбираем товары для наших клиентов, уделяя особое внимание качеству и& nbsp; безопасности.",
      className: "advantages__item_dog-fodder",
    },
    {
      title: "Персональный подход",
      describe: "Мы&nbsp;понимаем, что каждый питомец уникален, поэтому предлагаем вам индивидуальные рекомендации по& nbsp;выбору товаров.",
      className: "advantages__item_dog",
    },
  ];

  return (
    <section className="advantages">
      <div className="advantages__bg">
        <h2 className="advantages__title">Наши преимущества</h2>
        <Container className="container advantages__container" >
          <ul className="advantages__list">
            {arr.map((item, i) => (
              <AdvantagesLi
                title={item.title}
                describe={item.describe}
                className={item.className}
                key={i} />
            ))}
          </ul>
        </Container>
        <div className="advantages__count-box">
          <p className="advantages__count">10</p>
          <p className="advantages__count-text">магазинов в&nbsp;сети</p>
        </div>
      </div>
    </section>
  )
};