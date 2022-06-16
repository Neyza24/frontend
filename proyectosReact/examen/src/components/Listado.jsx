import React from 'react'
import Item from './Item';
import { useState, useEffect } from 'react';
import { Container } from "../styles/ListadoStyles.js";

export default function Listado({ addToCart }) {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch('data.json')
    const result = await response.json();
    setProducts(result);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      {
        products.map((product) => <Item key={product.id} addToCart={addToCart} product={product} />)
      }
    </Container>
  )
}