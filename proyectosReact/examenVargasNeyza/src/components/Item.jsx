import { useState } from "react";
import { Card, Image, Name, H5, Span, Button } from "../styles/ItemStyles";

export default function Item({ addToCart, product }) {
  const btnStyle = {
    backgroundColor: '#ebebeb',
    color: '#c0c0c0',
    cursor: 'auto',
    boxShadow: 'none'
  }
  const { producto } = product;
  const [stock, setStock] = useState(product.stock);



  const buyProduct = (cant) => {
    if (cant > 0) {
      setStock((prevState) => prevState - 1);
      addToCart();
    }
  }


  return (
    <Card >
      <Image src={producto.image} alt={producto.name}></Image>
      <Name>{producto.nombre}</Name>
      <p>{producto.descripcion}</p>
      <H5>En stock {stock === 0 ? <Span>Agotado</Span> : stock}</H5>
      <Button onClick={() => buyProduct(stock)} style={stock === 0 ? btnStyle : {}}>{stock === 0 ? "SIN STOCK" : "COMPRAR"}</Button>
    </Card>
  )
}
