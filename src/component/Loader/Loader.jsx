import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loader({ loading }) {
  return loading ? <PropagateLoader color="#ccc" loading size={20} speedMultiplier={1} /> : null;
}
