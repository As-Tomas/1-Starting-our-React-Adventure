
import  ReactDom  from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

// eslint-disable-next-line react/prop-types
export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div>
          <h2>Hi,</h2>
          <p>{children}</p>
          <p>Welcome to my work assignment. Here at the <br/> home page just one API call and no interaction<br/> for user in all three pages. There is two buttons<br/> at left bottom corner...</p>
        </div>
        <button className="text-2xl text-white bg-green-500 rounded-xl py-1 px-4 mt-4 mx-[35%] "
        onClick={onClose}> Close </button>
        
      </div>
    </>,
    document.getElementById("portal")
  );
}
