import { ReactComponent as IconPageComplete } from "assets/icons/pg_complete.svg"

function Progress({number, phase, step}) {
  return (
    <>
      <span className="progress-group" data-phase={phase}>
        <span className="progress-icon ">
          <span className="text">{number}</span>
          <IconPageComplete className="icon cursor-point" />
        </span>
        <span className="progress-label">{step}</span>
      </span>
      {/* number 3 後面不需要 progress-bar */}
      {number !== 3 && (
        <span className="progress-bar" data-order={number}></span>
      )}
    </>
  )
}

export default function StepProgress() {
  return (
    <>
      <section className="progress-container col col-12">
        <Progress number={1} step="寄送地址" phase="address" />        
        <Progress number={2} step="運送方式" phase="shipping" />
        <Progress number={3} step="付款資訊" phase="credit-card" />
      </section>
    </>
  )
}