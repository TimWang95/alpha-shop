import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


function CartData({ products, handleQuantityClick }) {
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
  const {products, handleQuantityClick} = useContext(CartContext)

  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
          <CartData products={products} handleQuantityClick={handleQuantityClick}/>
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