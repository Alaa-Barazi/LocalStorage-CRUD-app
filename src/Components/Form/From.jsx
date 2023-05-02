import { useState, useEffect } from 'react'

export default function Form(){
    const [item,setItem] = useState([]);
    const [items, setItems] = useState([]);
    const [check,setItemCheck] = useState(false);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  
  }, []);
  const checkIt=(item)=>{
    if(item[1]==false)
    return <span>&#9746;</span>

        return <span>&#9745;</span>

  }
  
const addHandler = ()=>{
   const itadd=[item,false];
    setItems([...items,itadd]);
    localStorage.setItem('items', JSON.stringify([...items,itadd]));
    setItem([]);
  
    
}

const deleteHandler = (itemToDelete) => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    const updatedItems = storedItems.filter((item) => item[0] !== itemToDelete[0]);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };
const updateHandler = (itemToUpdate) =>{
    const ind = items.indexOf(itemToUpdate);
    console.log(ind);
    
   
    setItemCheck(check=>!check);
    items[ind]=[itemToUpdate[0],check];
    localStorage.setItem('items', JSON.stringify(items));

}
return(
    <>
    
    <label>Add todo</label>
    <input type='text' value={item} onChange={(e)=>setItem(e.target.value)}/>
    <button onClick={addHandler}>Add</button>
    
     {items.map((item, index) => ( // Add a unique key for each item in the map function
        <div key={index}>
           

          <p> <button onClick={()=>updateHandler(item)}>{checkIt(item)}</button> {item} <button onClick={()=>deleteHandler(item)}>delete</button></p>
          
        </div>
      ))}
    </>
)

}


// import { useState, useEffect } from 'react';

// export default function Form() {
//   const [item, setItem] = useState('');
//   const [items, setItems] = useState([]);

//   // Move the local storage retrieval logic to useEffect to ensure it's only called once on mount
//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('items'));
//     if (items) {
//       setItems(items);
//     }
//   }, []);

//   // Use a function reference for the onClick handler, not the result of the function call
//   const addHandler = () => {
//     setItems([...items, item]);
//     localStorage.setItem('items', JSON.stringify([...items, item]));
//     setItem(''); // Clear the input field after adding the item
//   };

//   return (
//     <>
//       <label>Add todo</label>
//       <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
//       <button onClick={addHandler}>Add</button>
//       {items.map((item, index) => ( // Add a unique key for each item in the map function
//         <div key={index}>
//           <p>{item}</p>
//         </div>
//       ))}
//     </>
//   );
// }
