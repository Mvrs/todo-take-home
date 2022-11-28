interface Props {
  items: Item[];
}

const Header = ({ items }: Props) => (
  <header id="page-header">
    <h1>My To-Do List</h1>
    <p id="number-of-items">
      {items.length} {items.length === 1 ? "item" : "items"}
    </p>
  </header>
);

export default Header;
