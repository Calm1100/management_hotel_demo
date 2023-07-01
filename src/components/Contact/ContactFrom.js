import React, { useState } from "react"
import { useHistory  } from "react-router-dom";
import "./Contact.css"

const ContactFrom = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const history = useHistory();

  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, lname, phone, email, subject, company, message }

    fetch("http://localhost:8000/customer",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(newValue)
    }).then((res)=>{
      alert('Saved successfully.')
      history.push('/contact');
    }).catch((err)=>{
      console.log(err.message)
    })

  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>Subject</span>
                  <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='input'>
                  <span>Your Company</span>
                  <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn'>Submit Now</button>
            </form>
          </div>

          <div className='side-content'>
            <h3>Visit our location</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br />

            <h3>Message us</h3>
            <span>info@exampal.com</span>
            <br />
            <span>+01 123 456 789</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </>
  )
}

export default ContactFrom