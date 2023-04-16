import { useState } from "react"
import Register from "./Register"
import Cart from "../Cart/Cart"
import ProgressControl from "./ProgressControl"
import { CartProvider } from "../../context/CartContext"
import { CreditCardContext, creditCardDefault } from "../../context/CreditCardContext"


export default function Main() {
  const [number, setNumber] = useState(1)
  const [phase, setPhase] = useState("address")

  const [shippingCost, setShippingCost] = useState(0)
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardDefault)

  function handlePhaseClick(e) {
    const target = e.target
    const phaseControl = target.parentElement.dataset.phase
    // console.log("target", target)
    // console.log("phaseControl", target.parentElement)

    // next button
    if (target.className === "next") {
      if (phaseControl === "address") {
        setPhase("shipping")
      }
      if (phaseControl === "shipping") {
        setPhase("credit-card")
      }
      setNumber((n) => n + 1)
      // console.log("number", number)
    }
    // prev button
    if (target.className === "prev") {
      if (phaseControl === "credit-card") {
        setPhase("shipping")
      } else {
        setPhase("address")
      }
      setNumber((n) => n - 1)
      // console.log("number", number)
    }
  }

  const handleShippingCost = (e) => {
    if (e.target.id === 'shipping-dhl') {
      setShippingCost(500)
      console.log("shippingConst", 500)
    } else if (e.target.id === 'shipping-standard') {
      setShippingCost(0)
      console.log("shippingConst", 0)
    }
  }

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <CreditCardContext.Provider value={{creditCardInfo, setCreditCardInfo}}>
          <CartProvider>
            <Register 
              number={number}
              phase={phase}
              onShippingOption={handleShippingCost}
            />
            <Cart
              shippingCost={shippingCost}
            />
            <ProgressControl 
              number={number}
              phase={phase}
              onClick={handlePhaseClick}
              shippingCost={shippingCost}
            />
          </CartProvider>
          </CreditCardContext.Provider>
        </div>
      </main>
    </>
  )
}