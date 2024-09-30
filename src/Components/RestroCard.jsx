import { useState } from "react";
import Modal from "./common/Modal";

const RestroCard = ({ imageUrl, altText, restName, restRating, restId }) => {
  const [show, setShow] = useState(false);
  const openModalHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const footerBtnHandler = () => {
    alert("Hello from Open Handler");
  };

  return (
    <div>
      <div className="restroCard" onClick={openModalHandler}>
        <div>
          <img className="restImage" src={imageUrl} alt={altText} />
        </div>
        <h1 className="restName">{restName}</h1>
        <div>{restRating}</div>
      </div>
      {show && <Modal setShow={setShow} footerBtnHandler={footerBtnHandler} />}
    </div>
  );
};
export default RestroCard;
