import React, {useState} from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items,setItems] = useState([]);

    const addToList = (item) => {
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);
    };
  return (
    <div>
        <ShippingForm addToListCallback={(value) => addToList(value)} />
        <h2>Shipping List</h2>
        <table>
            <thead>
                <th>title</th>
                <th>number</th>
                <th>weight</th>
                <th>color</th>
                <th>place</th>
            </thead>
            <tbody>
                {
                    items.map(item => {
                        return(
                        
                        <tr key={item.itemname}>
                            <td>{item.itemname}</td>
                            <td>{item.itemnumber}</td>
                            <td>{item.itemweight}</td>
                            <td>
                                <div style = {{backgroundColor : item.itemcolor, width:"60px", height:"30px"}}></div>
                            </td>
                            <td>{item.itemplace}</td>

                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShippingList