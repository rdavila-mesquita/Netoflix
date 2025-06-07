import "./Buttons.css"

export default function IconButton(props) {
  return (
    <div className="btnAction">
        <button className='btnComponenent'>
            <img src={props.name} />
        </button>
        {props.tooltip && <span className="tooltip">{props.tooltip}</span>}
    </div>
  )
}
