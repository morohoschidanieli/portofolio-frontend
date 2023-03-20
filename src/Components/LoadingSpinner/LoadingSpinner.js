import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingSpinner = () => {
  return (
    <FontAwesomeIcon className="fa-spin" icon={faSpinner}></FontAwesomeIcon>
  );
};

export default LoadingSpinner;
