import React, { Fragment } from 'react'

const CardContact = (props) => {
  return (
    <Fragment>
    {/* <pre>{JSON.stringify(props.data)}</pre> */}
    {/* <p>{props.data.name.first}</p> */}
    {/* <div className='card text-center sticky-top'>
    <div className='card-header bg-primary text-center'>
      <div className='h4'/>
      </div> */}
   
    
    {
      Object.keys(props.data).length > 0?
      <Fragment>
      <div className='card text-center sticky-top mt-3'>
    <div className='card-header bg-primary '>
      <div className='h2'></div>
      </div>
      <div className='card-body text-center'>
      <img src={props.data.picture.large} className='img-fluid img-thumbnail rounded-circle w-50 contact-img'  alt=''/>
      <ul className='list-group text-left mt-3'>
                                <li className='list-group-item list-group-item-primary'>
                                    NAME: {props.data.name.first} {props.data.name.last}
                                </li>
                                <li className='list-group-item list-group-item-primary'>
                                    AGE: {props.data.dob.age}
                                </li>
                                <li className='list-group-item list-group-item-primary'>
                                    EMAIL: {props.data.email}
                                </li>
                                <li className='list-group-item list-group-item-primary'>
                                    ADDRESS: {props.data.location.city}
                                </li>
                             </ul>
      </div>
      </div>
     
      </Fragment>
      : null
    }
    {/* {
        Object.keys(props.data).length > 0 ?
        <Fragment>
        <div className='card'>
        <div className='card-header bg-primary'>
            <div className='p4'/>
        </div>
        <div className='card-body text-center'>
        <img src={props.data.picture} className='img-fluid img-thumbnail rounded-circle w-50 contact-img' alt=''/>
        {/* <ul className='list-group text-left mt-3'>
                                <li className='list-group-item list-group-item-primary'>
                                    NAME: {props.data.name.first} {this.props.data.name.last}
                                </li>
                                <li className='list-group-item list-group-item-primary'>
                                    AGE: {props.data.dob.age}
                                </li>
                                <li className='list-group-item list-group-item-primary'>
                                    EMAIL: {props.data.email}
                                </li>
                                <li className='list-group-item list-group-item-primary'>
                                    ADDRESS: {props.data.location.city}
                                </li>
                             </ul>
        </div>
      </div>
      {/* </Fragment> : null */}
    {/* }  */}
        
    {/* </div> */}
    
   
      {/* <p>{props.data.name.first}</p> */}
    </Fragment>
  )
}

export default CardContact
