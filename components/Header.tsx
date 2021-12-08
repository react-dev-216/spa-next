import style from '../styles/header.module.scss';
const Header = () => {
  return (
    <div className={style.bgHeaderImage}>
      <div className={'container'}>
        <ul className={style.topHeaderNav}>
          <li>
            <a href="#servicesProvided">Services Provided</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#rates">Rates</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
        <div className={style.headerBannerCard}>
          <h1>You deserve some relaxation time.</h1>
          <p>
            Replace your stress and worries with blissful happiness. Walk-ins
            welcome. Or call us and make an appointment. We would love to have
            you.
          </p>
        </div>
        <div className="row">
          <div className={`${style.callNowCard} col-md-6 col-sm-12`}>
            <h3>Call Now To Book</h3>
            <div className={`row ${style.callNowInnerWrapper}`}>
              <div className="col">
                <h3>Soul Relax</h3>
                <h4>289-298-5662</h4>
                <h5>
                  7611 Pine Valley Dr,
                  <br />
                  near Hwy 7, Unit 29,
                  <br />
                  Woodbridge
                </h5>
              </div>
              <div className="col">
                <h3>Golden Sunshine</h3>
                <h4>905-265-2158</h4>
                <h5>
                  180 Winges Rd,
                  <br />
                  near Hwy 7 & Weston Rd. Unit 5,
                  <br />
                  Woodbridge
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
