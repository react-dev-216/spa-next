import style from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className="container">
        <div className={style.footerInnerWrapper}>
          <ul>
            <li>
              <a href="#servicesProvided">Services Provided</a>
            </li>
            <li>
              <a href="#schedule">Shedule</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
          <div className={`row ${style.footerRightDiv} justify-content-md-end`}>
            <div className="col-md-4">
              <h3>Golden Sunshine</h3>
              <h5>180 Winges Rd, near Hwy 7 & Weston Rd. Unit 5, Woodbridge</h5>
              <h4>905-265-2158</h4>
            </div>
            <div className="col-md-4">
              <h3>Soul Relex</h3>
              <h5>7611 Pine Valley Dr, near Hwy 7, Unit 29. Woodbridge</h5>
              <h4>289-298-5662</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
