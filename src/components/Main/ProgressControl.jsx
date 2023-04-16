import { ReactComponent as IconLeftArrow } from "../../assets/icons/leftArrow.svg"
import { ReactComponent as IconRightArrow } from "../../assets/icons/rightArrow.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CreditCardContext } from "../../context/CreditCardContext"

function PrevBtn({ onClick }) {
  return (
    <>
      <button className="prev" onClick={onClick}>
        <IconLeftArrow className="arrow left-arrow"/>
        上一步
      </button>
    </>
  )
}

function NextBtn({ onClick }) {
  return (
    <>
      <button className="next" onClick={onClick}>
        下一步
        <IconRightArrow className="arrow right-arrow"/>
      </button>
    </>
  )
}


export default function ProgressControl({ number, phase, onClick, shippingCost }) {
  const { products } = useContext(CartContext)
  const { creditCardInfo } = useContext(CreditCardContext)

  const totalPrice = products.reduce((total, product) => {
    return (
      total + product.price * product.quantity
    )
  }, Number(shippingCost))
  // console.log(`totalPrice:`, totalPrice)
  
  function handleSubmit(e) {
    const payment=`cardHolder: ${creditCardInfo.cardHolder} cardNumber: ${creditCardInfo.cardNumber} expireDate: ${creditCardInfo.expireDate} cvc: ${creditCardInfo.cvc} `
    console.log(`information, ${payment}`)
    // console.log(creditCardInfo)
    console.log(`Price: $ ${totalPrice.toLocaleString()} 元`)
  
  }

  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase={phase}>
                 
        {number > 1 && <PrevBtn onClick={onClick}/>}
        {number < 3 ? (<NextBtn onClick={onClick}/>) : (<button className="next" onClick={(e) => handleSubmit(e)}>確認訂單</button>)}  
         
        </section>
      </section>
    </>
  )
}