import CryptoDetails from "./Crypto/CryptoDetails";
import TrendingTopCoin from "./Crypto/TrendingTopCoin";
import Ads from "./Static/Ads";

const MainCard = () => {
  return (
    <div className="parent">
      <div className="div1 pr-2">
        <CryptoDetails />
      </div>
      <div className="div2 pl-2 mb-2">
        <Ads />
      </div>
      <div className="div3 pl-2 mt-2">
        <TrendingTopCoin />
      </div>
    </div>
  );
};

export default MainCard;
