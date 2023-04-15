import { useState } from "react"
import Register from "./Register"
import Cart from "../Cart/Cart"
import ProgressControl from "./ProgressControl"
import { CartProvider } from "../../context/CartContext"


export default function Main() {
  const [number, setNumber] = useState(1)
  const [phase, setPhase] = useState("address")

  function handlePhaseClick(e) {
    const target = e.target
    const phaseControl = target.parentElement.dataset.phase
    console.log("target", target)
    console.log("phaseControl", target.parentElement)

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

  return (
    <>
      <main className="site-main">
        <div className="main-container">
          <CartProvider>
            <Register 
              number={number}
              phase={phase}
            />
            <Cart />
            <ProgressControl 
              number={number}
              phase={phase}
              onClick={handlePhaseClick}
            />
          </CartProvider>
        </div>
      </main>
    </>
  )
}