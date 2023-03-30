import React, { useState } from 'react';
import './Pallet.css'

function Pallet() {
  const [color, setColor] = useState('');

  const handleChange = (event) => {
    console.log(" color changed");
    setColor(event.target.value);
  }
  const baseUrl="http://localhost:5005";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(baseUrl + "/changeColor", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newColor : color }),
    });
    const html = await response.text();
    console.log(html);
    
  }

  return (
   
      <div className='containerr'>
        <div className='insidee'>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              Select a color:
            {/* <br></br>
            <br></br> */}
              <input type="color" style={{marginLeft:"3rem"}} value={color} onChange={handleChange} />
            </label>
            <br></br>
            <br></br>
            <button className ="btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    
  );
}

export default Pallet;
