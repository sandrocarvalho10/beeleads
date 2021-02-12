import React, { useState } from 'react';
import Modal from '../Modal';
import './Form.css'

declare interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const initialFormState = {
  name: '',
  email: '',
  tel: '',
  date: '',
  gender: '',
  lgpd: ''
}

const Form: React.FC<FormProps> = (props) => {
  const [form, setForm] = useState(initialFormState)
  const [modal, setModal] = useState('')

  const openModal = () => {
    setModal('active');

  }
  const closeModal = () => {
    setModal('');

  }
  const formatDate = (date: string) => {
    const splitedDate = date.split("-")
    return `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;
  }

  const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(event)

    const dateformated = formatDate(form.date)
    const datas = {
      name: form.name,
      email: form.email,
      tel: form.tel,
      date: dateformated,
      gender: form.gender,
      lgpd: form.lgpd
    }
    setForm(datas)
    openModal()

  }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })

  }

  return (
    <>
      <form onSubmit={preventedSubmit}>
        <h2>Faça seu cadastro grátis e concorra! </h2>
        <div className="input-group">
          <label className="sr-only" htmlFor="name">Nome Completo</label>
          <input required onChange={handleInputChange} type="text" id="name" name="name"
            placeholder="Nome Completo" />
        </div>
        <div className="input-group">
          <label className="sr-only" htmlFor="email">E-mail</label>
          <input required onChange={handleInputChange} type="text" id="email" name="email" placeholder="E-mail" />
        </div>
        <div className="inputs column">
          <div className="input-group">
            <label className="sr-only" htmlFor="tel">Telefone</label>
            <input required onChange={handleInputChange} type="tel" id="tel" name="tel" placeholder="Telefone" />
          </div>
          <div className="input-group">
            <label className="sr-only" htmlFor="date">Data de Nascimento</label>
            <input required onChange={handleInputChange} type="date" id="date" name="date"
              placeholder="Data de Nascimento" />
          </div>
        </div>
        <div className="inputs input-gender">
          <label className="container">Masculino
                    <input required onChange={handleInputChange} type="radio" name="gender" value="Masculino" />
            <span className="checkmark"></span>
          </label>
          <label className="container">Feminino
                    <input required onChange={handleInputChange} type="radio" name="gender" value="Feminino" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="inputs input-check-lgpd">
          <input required className="styled-checkbox" id="styled-checkbox-1" onChange={handleInputChange}
            type="checkbox" name="lgpd" value="1" />
          <label htmlFor="styled-checkbox-1">Ao marcar esta opção você aceita nossa <a href=""> Politica de
                      Privacidade</a> e está de acordo com nossos <a href=""> Termos e Condições</a>.</label>
        </div>
        <button type="submit">Quero concorrer</button>
        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim risus justo sit volutpat ut quis
        massa. Pharetra eget dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam aliquam augue
                  scelerisque. At ornare vel vel quisque aliquam pellentesque eu.</small>
      </form>
      <Modal modal={modal} datas={form} closeModal={closeModal} />
    </>
  )
}

export default Form;