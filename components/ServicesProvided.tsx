// import ServiceCard from './ServiceCard';
import style from '../styles/service_provided.module.scss';
import ServiceCard from './ServiceCard';

const ServicesProvided = () => {
  const services = [
    {
      title: 'Deep tissue massage',
      desc: 'Slow, deep strokes to stimulate circulation and reduce tension.',
      icon: './images/service_icon1.png',
    },
    {
      title: 'Relaxation massage',
      desc: 'To reduce stress, and calm and relax the mind.',
      icon: './images/service_icon4.png',
    },
    {
      title: 'Chinese massage',
      desc: 'An ancient practice to improve energy flow in the body.',
      icon: './images/service_icon2.png',
    },
    {
      title: 'Swedish massage',
      desc: 'Like Deep Tissue massage, but uses lighter strokes.',
      icon: './images/service_icon3.png',
    },
  ];
  return (
    <div className={style.serviceProvidedWrapper}>
      <h1 id="servicesProvided">Services Provided</h1>
      <div className="container">
        <div className="row">
          {services &&
            services.map((x, i) => (
              <div key={i} className="col-md-6">
                <ServiceCard title={x.title} desc={x.desc} icon={x.icon} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
