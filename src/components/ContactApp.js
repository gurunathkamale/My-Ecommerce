import React, { Fragment } from 'react'

const ContactApp = (props) => {
    let updateData = (data)=>{
        props.receiveData(data)
        // console.log(data)
    }
  return (
    <Fragment>
    {/* <pre>{JSON.stringify(props.send)}</pre> */}

      <div className='container mt-3'>
        <div className='row'>
            <div className='col'>
            <div className='card'>
                <div className='card-header bg-success text-center text-white'>
                   <p className='h4'>Contacts List</p> 
                </div>
                <div className='card-body'>
                <table className='table table-hover table-striped table-primary text-center'>
                <thead>
                    <tr>
                    <th>SNO</th>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       Object.keys(props).length > 0 ? 
                       <Fragment>
                       {
                        props.send.map((data)=>{
                            return (
                              <tr key={data.login.uuid} onClick={()=>updateData(data)}>
                                <td>
                                  {data.login.uuid.substr(
                                    data.login.uuid.length - 4
                                  )}
                                </td>
                                <td>
                                <img src={data.picture.large} alt='' width='50px' height='50px'/>
                                </td>
                                <td>{data.name.first} {data.name.last}</td>
                                <td>{data.dob.age}</td>
                                <td>{data.email}</td>
                                <td>{data.location.city}</td>
                              </tr>
                            );
                        })
                       
                       }
                       
                       </Fragment> : null
                    }
                </tbody>
                </table>
                </div>
            </div>
                
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ContactApp
