import { useContext } from 'react'
import { CreditCardContext } from '../../context/CreditCardContext'

export default function Step3() {
  const { creditCardInfo, setCreditCardInfo } = useContext(CreditCardContext)
  
  function handleInputValue (e) {
    setCreditCardInfo({
      ...creditCardInfo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input type="text" placeholder="John Doe" name='cardHolder' onChange={handleInputValue}/>
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" name='cardNember' onChange={handleInputValue}/>
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input type="text" placeholder="MM/YY" name='expirDate' onChange={handleInputValue}/>
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input type="text" placeholder="123" name='cvc' onChange={handleInputValue}/>
            </div>
          </div>
        </section>
      </form>
    </>
  )
}