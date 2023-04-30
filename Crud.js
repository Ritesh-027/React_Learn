import React, {useState} from 'react'
import './Crud.css';

// Component

const Crud = () => {
// Using object
const [data,setData] = useState([]);
const [form,setForm] = useState({Name:'',Email:''});

  // Function to add data in a array of objects.
  const addData = (e) => {
    e.preventDefault();
      setData([...data,form])
      setForm({...data,Name:'',Email:''});
      }
 
    // delete function
    let deletData = (index) =>{
      const newItems = [...data];
      newItems.splice(index,1);
      setData(newItems);
    }

    // edit function
    let editData = (index) =>{
    let newItems = [...data];
    setForm(newItems[index]);
    newItems.splice(index,1)
    setData(newItems);
    }


  return ( //always return JSX only.
    <> 
    <div className='header-div'>
      <h1 className='heading'>
        Data Table
      </h1>
    </div>

<form onSubmit={addData}>
    <div className='Form'>
    <div className='fields'> 

    {/* First made by using individual states and then used objects */}
    {/* <input type="text" value={name} onChange={(event)=>setName(event.target.value)} id="name"  placeholder='Enter your name'/>  */}
    {/* <input type="email" value={Email} onChange={(event)=>setEmail(event.target.value)} id="email" placeholder='Enter your mail' /> */}
    
    <input type="text" value={form.Name} onChange={(event)=>setForm({...form,Name:event.target.value})} id="name"  placeholder='Enter your name'/> 
    <input type="email" value={form.Email} onChange={(event)=>setForm({...form,Email:event.target.value})} id="email" placeholder='Enter your mail' />
    </div>
    <button  type='submit'className='btnAdd'>Add</button> 
    </div>

    <div className="tableHead">
            <h2>Name</h2>
            <h2>Email</h2>
            <h2>Action</h2>
  </div>
  </form>
{/* //Read & Delete   */}
  {
         data.map((item,index) =>  {
          return(
            <>
            <div key={index} className="data">
            <h4>{item.Name}</h4>
            <h4>{item.Email}</h4>
            <div>
            <button  type="button"  className='btnd' onClick={() => deletData(index)}>Delete</button>
            <button  type="button" className='btne' onClick={() => editData(index)}>Edit</button>
            </div>
            
            </div>            
            </>
          )
        })
        }
    </>
  )
}
export default Crud;
