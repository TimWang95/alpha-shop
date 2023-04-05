import StepProgress from "./StepProgress"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

export default function Register () {
  return (
    <>
      <section class="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
        {/* <!-- register-title --> */}
        <h2 className="register-title col col-12">結帳</h2>
        {/* <!-- register-progress --> */}
        <StepProgress />
        {/* <!-- register-form --> */}
        <section className="form-container col col-12">
          <Step1 />
          {/* <Step2 /> */}
          {/* <Step3 /> */}
        </section>
      </section>
    </>
  )
}