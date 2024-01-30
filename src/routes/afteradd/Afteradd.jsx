import { useNavigate } from "react-router-dom";
import styles from "./Afteradd.module.css";

function Afteradd() {
  const navigate = useNavigate();
  const handleContainerClick = () => {
    // 클릭 시 Add 페이지로 이동
    navigate("/afteradd");
  };
  return (
    <div>
      <div className={styles.container} onClick={handleContainerClick}></div>
    </div>
  );
}
export default Afteradd;
