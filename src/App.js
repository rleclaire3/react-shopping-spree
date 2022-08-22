import { useRef, useState } from "react";
import "./style.css"

function App() {
  const cart = {
    items: [
      'Camera',
      'Shoes',
      'Handbag',
      'Smartphone',
      'Sweater',
      'Watch',
      'Headphones',
      'Book',
      'Ring',
      'Jalen',
      'Reilly',
      'Danial',
      'Techin',
    ],
  }

  // let selection = undefined;
  
  const [addedItems, setUserCart] = useState([]);
  const selectRef = useRef();

  function addItem(e){
    e.preventDefault();
    setUserCart([...addedItems, selectRef.current.value])
    console.log(selectRef)
  }

  return (
    <>
      <header>
        <h1>Assignment 01</h1>
      </header>
      <main>
        <h2>Shopping List</h2>
        <ul>{addedItems.length <= 0 ? "Add some items" : "You have " + addedItems.length + " items in your shopping list"}</ul>
        <div className="cart-items">
          <ul>{addedItems.length > 0 ? addedItems.map((item, i)=><li key={i}>{item}</li>) : ""}</ul>
        </div>
        <form onSubmit={addItem}>
          <label htmlFor="cart">Select your items</label> <br />
          <select name="cart" id="cart" ref={selectRef}>
            {cart.items.map((item, i) => <option key={i} value={item}>{item}</option> )}
          </select>
          <button type="submit">Add item</button>
        </form>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
