import React from 'react';

import { images } from '../../constants';
import './styles.css';

const Aboutus = () => {
  return (
    <div className='about-page'>
      <div className='content'>
        <h1>About Us</h1>
        <img src={ images.whitecoffee } className='whitecoffee' />
        <div className='the-story'>
          <p>Crediamo che i momenti migliori della vita accadano durante un pasto condiviso con la famiglia, gli amici o i colleghi. Il ristorante LaBuena è qui per aiutarti. Che sia a casa o in uno dei nostri ristoranti iconici, c'è sempre un buon motivo per godersi la ricca cultura culinaria dell'Indonesia assaggiando i nostri deliziosi pasti in stile cucina casalinga. Con la nostra vasta gamma di piatti della nostra cucina da provare, c'è sempre un motivo per tornare di più.</p>
          <div className='space'>
            <div className='dashed' />
          </div>
          <p>Una celebrazione della storia, il ristorante LaBuena ha avuto l'onore di servire i nostri ospiti dal 1993, dagli inizi umili ad oggi, ciascuno dei nostri ristoranti è stato progettato con cura per sentirsi a proprio agio e un'icona. Situato in posizione strategica nel cuore della città, il ristorante LaBuena è il luogo ideale per incontri di lavoro, cene in famiglia e pranzi con gli amici. Con un menu per bambini appositamente realizzato per ragazzi e culinario, mangiare fuori con i più piccoli è un evento divertente e senza stress. Non vediamo l'ora di accogliervi presto!</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;
