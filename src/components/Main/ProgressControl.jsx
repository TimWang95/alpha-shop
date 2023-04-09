import { ReactComponent as IconLeftArrow } from "../../assets/icons/leftArrow.svg"
import { ReactComponent as IconRightArrow } from "../../assets/icons/rightArrow.svg"

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

export default function ProgressControl({ number, phase, onClick }) {
  
  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <section className="button-group col col-12" data-phase={phase}>
                 
        {number > 1 && <PrevBtn onClick={onClick}/>}
        {number < 3 ? (<NextBtn onClick={onClick}/>) : (<button className="next" >確認訂單</button>)}  
         
        </section>
      </section>
    </>
  )
}