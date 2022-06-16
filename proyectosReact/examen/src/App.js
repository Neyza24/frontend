import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";


function App() {
  const [totalProducts, setTotalProducts] = useState(0);

  const addProducts = () => {
    setTotalProducts((prevState) => prevState + 1)
  }

  return (
    <div>
      <Cabecera totalProducts={totalProducts} />
      <Listado addToCart={addProducts} />
    </div>
  );
}

export default App;
