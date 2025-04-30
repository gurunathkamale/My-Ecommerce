import React, { Fragment, useEffect, useState} from 'react'

import './App.css'
import ContactApp from './components/ContactApp';
import CardContact from './components/CardContact';
import  Axios  from 'axios';





const App = () => {
  let [contacts, setContacts] = useState({
    posts:[],
    error: '',
    selectedContact:{}
  })


  useEffect(()=>{
    let url = 'https://gist.githubusercontent.com/gurunathkamale/96f609e8e0ab080b0b70885000f0325f/raw/d83db019adf65d3637cb57ff1ff7960050712b87/employees-guru.json'
    Axios.get(url).then((res)=>{
      setContacts({
        ...contacts,
        posts:res.data
      })
    }).catch((err)=>{
      setContacts({
        ...contacts,
        error:err.message
      })

    })
  },[])


  let recieveData = (value)=>{
    setContacts({
      ...contacts,
      selectedContact:value
    })
  }
  
  return (
    <Fragment>
    <nav className='navbar navbar-dark bg-danger navbar-expand-sm text-white'>
      <p className='h4'>Contact APP</p>
    </nav>
{/* <pre>{JSON.stringify(contacts.selectedContact)}</pre> */}
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
        {
          contacts.posts.length > 0 ? 
          <Fragment>
          <ContactApp send={contacts.posts}  receiveData={recieveData}/>
          </Fragment> : null
        }
          
        </div>
        <div className='col-md-3'>
        {
          Object.keys(contacts.selectedContact).length >0 ?
          <Fragment>
          <CardContact data={contacts.selectedContact}/>
          </Fragment>: null
        }
          
        </div>
      </div>
    </div>
     
    </Fragment>
  );
}

export default App
