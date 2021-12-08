import style from '../styles/service_provided.module.scss';

type CardProps = {
  title: string;
  desc: string;
  icon: string;
};

const ServiceCard = ({ title, desc, icon }: CardProps) => {
  return (
    <div className={style.serviceCard}>
      <div className={style.iconDiv}>
        <img src={icon} alt={title} />
      </div>
      <div className={style.secondDiv}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
