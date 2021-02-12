import React from 'react'
import premio from '../../assets/bigPremio.png';

import './Modal.css'

const Modal: any = (props: any) => {
  return(
    <div className={`overlay ${props.modal}`}>
      <div className="card">
        <span className="close" onClick={props.closeModal}>x</span>
        <img src={premio} alt="" />
        <div className="datas">
          <h2>Cadastrado com Sucesso</h2>
          <span>{props.datas.name}</span>
          <span>{props.datas.email}</span>
          <span>{props.datas.tel}</span>
          <span>{props.datas.date}</span>
          <span>Sexo: {props.datas.gender}</span>
          <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quas! Sint temporibus aliquid,
            possimus. </small>
        </div>
      </div>
    </div>
  )
}

export default Modal;