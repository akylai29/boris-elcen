import css from "./Card.module.css"
import Mainpage from "../../pages/Mainpage"
import React from "react"
function Card(props) {

  return (
    <div className={"card " + css.card}>
      <img src={props.img} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>

        <a href="#" className="btn btn-primary">
          Купить
        </a>
      </div>
    </div>

  )
}
export default Card;