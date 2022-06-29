import Controls from "./Controls";
import HeaderComponent from "./HeaderComponent";
import Items from "./Items";

function Header() {
  return (
    <div className="slider main">
      <HeaderComponent />
      <Controls />
      <Items />
      <div className="line"></div>
    </div>
  );
}

export default Header;