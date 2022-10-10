import React from 'react'

import backgroundimage from './backgroundimage.jpg';
import Base from "./Base";
const Contactus = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <Base>
     <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="container mt-5">
      <h2 className="mb-3"> Contact Form </h2>
      <form onSubmit={onSubmit}>
        <br></br>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <br></br>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
            <br></br>
          <label className="form-label" htmlFor="message">
               Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <br></br>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>

    <div>
 
 < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6v5UqT3o0I3dTr96X1e_f51RBDbvqbToPg&usqp=CAU" width='1000px' height={'500px'} />


</div>

           
    </Base>
  )
}
export default Contactus