import React from 'react'
import { Header, H1, Span } from '../styles/HeaderStyles'


export default function Cabecera({ totalProducts }) {

  return (
    <Header>
      <H1>Carrito de compras</H1>
      <p>Cantidad de productos <Span>{totalProducts}</Span></p>
    </Header>
  )
}