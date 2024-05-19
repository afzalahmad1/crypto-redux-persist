import Button from "../../Common/Button";
import "./styles.css";
import Iphone from "../../../assets/iphone.png";
import Gradient from "../../../assets/gradient 1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const MainComponent = () => {

  
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link to="/dashboard">
            <Button text={"Dashboard"} outlined={false}/>
          </Link>
          <Button text={"Logout"} outlined={true}/>
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={Iphone}
          alt="iphone"
          className="iphone"
          initial={{ y: -15 }}
          animate={{ y: 15 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.img src={Gradient} alt="gradient" className="gradient" />
      </div>
    </div>
  );
};
export default MainComponent;
