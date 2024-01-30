import { useNavigate } from "react-router-dom";
import styles from "./Afteradd.module.css";

function Afteradd() {
  const navigate = useNavigate();
  const handleContainerClick = () => {
    navigate("/afteradd");
  };
  return (
    <div>
      <div className={styles.container} onClick={handleContainerClick}></div>
    </div>
  );
}
export default Afteradd;
