// import { getAllTodo, getCompletedTodo } from "../utils/HandleApi";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import img from "../assets/images/crypto_icon.png";
import calculator from "../assets/images/calculator.png";
import img from "../assets/images/crypto_icon.png";

function Home() {
  return (
    <div className="demo-section section pt-120 pb-70  bg-gray" id="demo">
      <div className="container">
        <div className="row">
          <Link to="/ceaser_cipher" className="col-lg-3 col-md-3 col-6 my-3">
            <div className="demo-item">
              <div className="image">
                <img src={img} alt="" />
                <ArrowForwardIcon className="icon" />
              </div>
              <h6 className="title">Ceaser Cipher</h6>
            </div>
          </Link>
          <Link to="/rail_cipher" className="col-lg-3 col-md-3 col-6 my-3">
            <div className="demo-item">
              <div className="image">
                <img src={img} alt="" />
                <ChevronRightIcon className="icon" />
              </div>
              <h6 className="title">Rail Fence Cipher</h6>
            </div>
          </Link>
          <Link to="/vignere_cipher" className="col-lg-3 col-md-3 col-6 my-3">
            <div className="demo-item">
              <div className="image">
                <img src={img} alt="" />
                <ArrowForwardIcon className="icon" />
              </div>
              <h6 className="title">Vignere Cipher</h6>
            </div>
          </Link>
          <Link to="/vernam_cipher" className="col-lg-3 col-md-3 col-6 my-3">
            <div className="demo-item">
              <div className="image">
                <img src={img} alt="" />
                <ArrowForwardIcon className="icon" />
              </div>
              <h6 className="title">Vernam Cipher</h6>
            </div>
          </Link>
          <Link to="/modulus" className="col-lg-3 col-md-3 col-6 my-3">
            <div className="demo-item">
              <div className="image">
                <img src={calculator} alt="" />
                <ArrowForwardIcon className="icon" />
              </div>
              <h6 className="title">Modulus</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
