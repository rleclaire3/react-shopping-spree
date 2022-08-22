import "./style.css";


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
      'Jalen'
    ],
    addedItems: [

    ]
  }


  return (
    <>
      <header>
        <h1>Assignment 01</h1>
      </header>
      <main>
        <h2>Shopping List</h2>
        <form action="">
          <label htmlFor="cart">Select your items</label> <br />
          <select name="cart" id="">
            {cart.items.map((item, i) => <option key={i}>{item}</option> )}
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
