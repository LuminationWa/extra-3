import plusIcon from "../Assets/icons/plus.svg";
import closeIcon from "../Assets/icons/x.svg";
import gemIcon from "../Assets/icons/gems.png";
import heroImg from "../Assets/images/mick-haupt-KtTF68ZjBak-unsplash.jpg";
import logo from "../Assets/icons/logo.png";
const Gachapon = () => {
  return (
    <div className="gachapon">
      <header className="gacha-top">
        <div className="gacha-top-decoration">
          <img alt="logo" src={logo}></img>
        </div>
        <button className="btn-no-style btn-icon close-icon">
          <img src={closeIcon} alt="close"></img>
        </button>
      </header>
      <div className="gacha-main">
        <img className="banner-img" src={heroImg} alt="Banner"></img>{" "}
        <div className="main-right">
          <div className="gacha-buttons">
            <div className="gacha-currency">
              <div className="gacha-currency-info">
                <div className="user-currency">
                  <img src={gemIcon} alt="currency" className="icon"></img>
                  <button className="btn-no-style">(3490)</button>
                </div>
                <button className="btn-no-style btn-icon">
                  <img src={plusIcon} alt="plus"></img>
                </button>
              </div>
            </div>
            <button className="primary-btn">Single</button>
            <button className="primary-btn">Tenfold</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gachapon;
