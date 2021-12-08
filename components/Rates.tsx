import style from '../styles/rates.module.scss';


const Rates = () => {


  return (
    <div className={style.rates}>
      <h1 id="rates">Rates</h1>

      <div className={style.rates2}>
        <p>30 minutes: $40</p>
        <p>45 minutes: $60</p>
        <p>60 minutes: $80</p>
        <p>VIP room at Golden Sunshine: add $10</p>
        </div>
    </div>
  );
};

export default Rates;
