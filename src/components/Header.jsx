import { useSelector } from "react-redux";
import { getIncompleteTodos } from "../store/todo";

function Header() {
  const incompleteTodos = useSelector(getIncompleteTodos);
  return <h1> TO DO List {incompleteTodos.length} </h1>;
}
export default Header;
