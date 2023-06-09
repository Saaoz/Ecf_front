import React, { useState } from 'react';
import '../../css/cardform.css';
import { postJob } from '../../api/api';


const AddCardForm = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [contract, setContract] = useState("Full time");
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [apply, setApply] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) {
      console.error("Veuillez sélectionner un contrat");
      return;
    }
    try {
      const currentDate = new Date();
      const data = {
        company,
        position,
        contract,
        location,
        website,
        apply,
        description,
        postedAt: currentDate.toISOString()
      };
      const response = await postJob(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form class="form-container" onSubmit={handleSubmit}>

        <div class="form-field">
          <label class="label" htmlFor="company">Company:</label>
          <input class="input" type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>


        <div class="form-field">
          <label className="label" htmlFor="position">Position:</label>
          <input className="input" type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>

        <div class="form-field">
          <label className="label" htmlFor="contract">Contract:</label>
          <select className="input" id="contract" value={contract} onChange={(e) => setContract(e.target.value)}>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
          </select>
        </div>


        <div class="form-field">
          <label className="label" htmlFor="location">Location:</label>
          <input className="input" type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div class="form-field">
          <label className="label" htmlFor="website">Website:</label>
          <input className="input" type="text" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>

        <div class="form-field">
          <label className="label" htmlFor="apply">Apply:</label>
          <input className="input" type="text" id="apply" value={apply} onChange={(e) => setApply(e.target.value)} />
        </div>

        <div class="form-field">
          <label className="label" htmlFor="description">Description:</label>
          <textarea className="card-form__textarea" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div class="form-field div_btn">
          <button class="submit-button" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddCardForm;
