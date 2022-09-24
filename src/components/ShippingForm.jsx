import React, {useState } from 'react'

function ShippingForm(props) {
    const [title,setTitle] = useState("");
    const [number,setNumber] = useState("");
    const [weight,setWeight] = useState("");
    const [color,setColor] = useState("");
    const [place,setPlace] = useState("");
    

    const handleSubmit = (e) => {
     e.preventDefault();
     console.log('dispalying');

     const data={
      itemname: title,
      itemnumber : number,
      itemweight : weight,
      itemcolor : color,
      itemplace : place
     };
     props.addToListCallback(data);
    
    }
  return (
    <div className='form'>
    <h1> ShippingForm</h1>    
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder='item name' onChange={(e) => setTitle(e.target.value)}/><br></br>
        <input type="number"  value={number} placeholder='item number' onChange={(e) => setNumber(e.target.value)} /><br></br>
        <input type="text"  value={weight} placeholder='item weight' onChange={(e) => setWeight(e.target.value)} /><br></br>
        <label>Color</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} /><br></br>
        <input type="text" value={place} placeholder='item place' onChange={(e) => setPlace(e.target.value)}/><br></br>
        <button>Submit</button>
    </form>
    <p></p>
    </div>
  )
}

export default ShippingForm