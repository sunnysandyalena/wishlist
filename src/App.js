import './App.css';
import { useState } from 'react';
import { data } from './data';
import picture from './wishlist.png';

function App() {
  const [items, setItems] = useState(data);
 
  const deleteItem = (id) => {
    let newItems = items.filter(item => item.id !== id );
    setItems (newItems);
  }

  return (
    <div className='container'>
      <div>
        <img src={picture} width='250px' alt='Wish list' />
      </div>
      <div>
        <h1>{items.length} ITEMS</h1>
      </div>
      {items.map((listItem => {
        const {id, item, image} = listItem;
        return (
          <div key={id} className='items'>
            <div>
              <h2>{id} - {item}</h2>
            </div>
            <div>
              <img src={image} width='300px' alt='Item'/>
            </div>
            <div>
              <button className='btnOne' onClick={() => deleteItem(id)}>DELETE ITEM</button>
            </div>
          </div>
        )
      }))}
      <div>
        <button className='btnTwo' onClick={() => setItems([])}>DELETE ALL</button>
      </div>
    </div>
  )
}

export default App;
