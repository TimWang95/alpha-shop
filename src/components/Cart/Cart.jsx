import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import cartData from "../../context/CartContext"
import { useState } from "react"


function CartData() {
  const [ products, setProducts ] = useState(cartData)

  function handleQuantityClick(productId, action) {
    const nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...products,
          quantity: action === 'minus' ? product.quantity - 1 : product.quantity + 1
        }
      } else {
        console.log(product.id)    
        return product
      }
    })
    const updataProducts = nextProducts.filter((product) => product.quantity > 0)
    setProducts(updataProducts)
  }

  return (
    <>
      {products.map(product =>
        <div className="product-container col col-12" 
        id={product.id}
        key={product.id}
        data-count={product.quantity} 
        data-price={product.price}>
          <img className="img-container" src={product.img} alt={product.name}/>
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <Minus className="product-action minus" onClick={() => {
                  handleQuantityClick(product.id, 'minus')
                }} />
                <span className="product-count">{product.quantity}</span>
                <Plus className="product-action plus" onClick={() => {
                  handleQuantityClick(product.id, 'plus')
                }} />
              </div>
            </div>
            <div className="price">${product.price}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Cart() {
  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
          <CartData />
        </section>

        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>

        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">$5298</div>
        </section>
      </section>
    </>
  )
}