import Register from "./Register"
import Cart from "../Cart/Cart"
import ProgressControl from "./ProgressControl"


export default function Main() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
            <Register />
            <Cart />
            <ProgressControl />
        </div>
      </main>
    </>
  )
}