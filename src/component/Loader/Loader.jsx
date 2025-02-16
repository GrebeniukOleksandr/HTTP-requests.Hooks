import PropagateLoader from "react-spinners/PropagateLoader";
import css from './Loader.module.css'
export default function Loader({ loading }) {
  return loading ? (
    <div className={css.loader}>
    <PropagateLoader color="#ccc" loading size={20} speedMultiplier={1} />
  </div>
  ) : null;
}
