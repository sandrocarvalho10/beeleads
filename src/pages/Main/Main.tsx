import React, { useState } from 'react'
import Container from '../../components/Container';
import Form from '../../components/Form';
import './Main.css';
import premio from '../../assets/bigPremio.png';
import womanRadio from '../../assets/womanradio.png';

const Main = () => {

return(
<main>
  <section className="section1">
    <Container>
      <div className="content-section">
        <img src={premio} alt="Imagem Novo Onix 2021" />
        <Form />
      </div>
    </Container>
  </section>
  <section className="section2">
    <Container>
      <div className="content-section">
        <img src={womanRadio} alt="Mulher segurando um rádio A beeleads e o Big Tester vão te dar um carro 0km" />
        <div className="video">
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe width={'743'} height={'419'} src="https://www.youtube.com/embed/dAZcuMyR83Y" frameBorder={0}
            allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
            allowFullScreen></iframe>
        </div>
      </div>
    </Container>
  </section>
</main>
)
}

export default Main;