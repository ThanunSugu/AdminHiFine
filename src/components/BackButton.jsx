import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="back"
      onClick={(event) => {
        event.preventDefault();
        navigate(-1);
      }}
    >
      Back
    </button>
  );
}

export default BackButton;
