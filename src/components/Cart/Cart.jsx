import { ReactComponent as Minus } from "../../assets/icons/minus.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import cartData from "../../context/CartContext"

function CartData({ id, name, img, price, quantity }) {
  return (
    <>
      {cartData.map(data =>
        <div className="product-container col col-12" 
        id={data.id}
        key={data.id}
        data-count={data.quantity} 
        data-price={data.price}>
          <img className="img-container" src={data.img} />
          <div className="product-info">
            <div className="product-name">{data.name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <Minus className="product-action minus" />
                <span className="product-count">{data.quantity}</span>
                <Plus className="product-action plus"/>
              </div>
            </div>
            <div className="price">${data.price}</div>
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