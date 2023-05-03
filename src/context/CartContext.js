import { useState, createContext } from 'react'

export const dummyData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


export const CartContext = createContext(dummyData)

export function CartProvider({ children }) {
  const [products, setProducts] = useState([...dummyData])

  function handleQuantityClick(productId, action) {
    const nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: action === 'minus' ? product.quantity - 1 : product.quantity + 1
        }
      } else {
        return product
      }
    })
    // 只留下大於 0 的商品
    const updataProducts = nextProducts.filter((product) => product.quantity > 0)
    setProducts(updataProducts)
  }

  return (
    <CartContext.Provider value={{ products, handleQuantityClick }}>
      {children}
    </CartContext.Provider>
  )
}
