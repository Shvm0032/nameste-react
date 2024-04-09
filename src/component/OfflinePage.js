
import dinoImage from "../assets/dino.png";

const OfflinePage = () => {
  return (
    <div className="display-flex">
      <div className="offline-card">
        <img  className="image-dino" src={dinoImage} alt="image" />

        <h3> No internet Try: Checking the network cables, modem, and router</h3>
        <h3> Reconnecting to Wi-Fi Running Windows Network Diagnostics</h3>
        <h3> ERR_INTERNET_DISCONNECTED</h3>

      </div>
    </div>
  );
};

export default OfflinePage;
