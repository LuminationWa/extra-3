import plusIcon from "../Assets/icons/plus.svg";
import closeIcon from "../Assets/icons/x.svg";
import heroImg from "../Assets/images/mick-haupt-KtTF68ZjBak-unsplash.jpg";
const Gachapon = () => {
  return (
    <div className="gachapon">
      <div className="gacha-top">
        <div className="gacha-top-decoration">
          <img alt="logo"></img>
          <h1>SUPER EPIC GACHA</h1>
        </div>
        <div className="gacha-top-right">
          <div className="gacha-top-user-info">
            <div className="user-currency">
              <img alt="currency"></img>
              <button className="btn-no-style">User currency</button>
            </div>
            <button className="btn-no-style">
              <img src={plusIcon} alt="plus"></img>
            </button>
          </div>
          <button className="btn-no-style">
            <img src={closeIcon} alt="close"></img>
          </button>
        </div>
      </div>
      <div className="gacha-main">
        <img className="banner-img" src={heroImg} alt="Banner"></img>{" "}
        <div className="gacha-buttons">
          <button className="primary-btn">Single</button>
          <button className="primary-btn">Tenfold</button>
        </div>
      </div>
    </div>
  );
};

export default Gachapon;
