import React from 'react';
import Header from '../components/commun/Header';
import AddCardForm from '../components/admin/AddCardForm';


function Formulaire() {

    return (
        <>
        <Header/>
        <div>
      <h1 className='formulaire_title'>Ajouter une nouvelle carte</h1>
      <AddCardForm/>
    </div>
        </>
    );
}

export default Formulaire;