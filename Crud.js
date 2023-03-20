
import React, {useState} from 'react'
import './Crud.css';

// Component

const Crud = () => {
  // Using multpile state.
/*const [Name,setName] = useState(""); // It is a hook that let us to add state variables.
  const [Email,setEmail] = useState(""); 
  const [data,setData] = useState([]);
*/

// Using object
const [form,setForm] = useState({});
const [data,setData] = useState([]);


  // Function to add data in a array of objects.
  const addData = () => {
      setData([...data,form])
      setForm(form);
      // setName("");
      // setEmail("");
    }
 
    // delete function
    let deletData = (index) =>{
      let arr = data;
      arr.splice(index,1);
      setData([...arr]);
    }

  return ( //always return JSX only.
    <> 
    <div className='header-div'>
      <h1 className='heading'>
        Data Table
      </h1>
    </div>

    <div className='Form'>
    <div className='fields'> 

    {/* First made by using individual states and then used objects */}
    {/* <input type="text" value={name} onChange={(event)=>setName(event.target.value)} id="name"  placeholder='Enter your name'/>  */}
    {/* <input type="email" value={Email} onChange={(event)=>setEmail(event.target.value)} id="email" placeholder='Enter your mail' /> */}
    
    <input type="text" value={form.Name} onChange={(event)=>setForm({...form,Name:event.target.value})} id="name"  placeholder='Enter your name'/> 
    <input type="email" value={form.Email} onChange={(event)=>setForm({...form,Email:event.target.value})} id="email" placeholder='Enter your mail' />
    </div>
    <button className='btn' onClick={addData}>Add</button> 
    </div>

    <div className="tableHead">
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Action</h2>
  </div>

  {/* Showing all the data in a table */}
  
  {
         data.map((item,index) =>  {
          return(
            <div key={index} className="data">
            <h4>{item.Name}</h4>
            <h4>{item.Email}</h4>
            <button type="button" class="btn btn-danger" onClick={() => deletData(index)}>Delete</button>
            </div>            
          )
        })
        }
    </>
  )
}
export default Crud;
