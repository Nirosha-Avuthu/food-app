const Modal = ({ setShow, footerBtnHandler, footerBtnType = "Open" }) => {
  console.log("modal");
  const closeHandler = () => {
    setShow(false);
  };
  return (
    <div className="modalContainer">
      <div className="modalCom">
        <div className="modalHeader">
          <div className="modalLogo" />
          <h1>Krithinga</h1>
          <span className="modalClose" onClick={closeHandler}>X</span>
        </div>
        <div className="modalBody">Body</div>
        <div className="modalFooter">
          <button onClick={closeHandler}>Cancel</button>
          <button onClick={footerBtnHandler}>{footerBtnType}</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
