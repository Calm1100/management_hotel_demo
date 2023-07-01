import { useEffect, useState } from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import { Link, useParams, useHistory } from "react-router-dom";

const EditCustomer = () => {
    const { customerId } = useParams();
    // const [customerData, setCustomerData] = useState({});
    const [id, setId] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8000/customer/" + customerId).then((res) => {
            return res.json();
        }).then((resp) => {
            setId(resp.id)
            setFname(resp.fname)
            setLname(resp.lname)
            setPhone(resp.phone)
            setEmail(resp.email)
            setSubject(resp.subject)
            setCompany(resp.company)
            setMessage(resp.message)
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const handlesubmit=(e)=>{
        e.preventDefault();
        const customerData={ id, fname, lname,phone, email, subject, company, message};
        
        fetch("http://localhost:8000/customer/"+customerId,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(customerData)
        }).then((res)=>{
          alert('Saved successfully.')
          history.push('/list-customer');
        }).catch((err)=>{
          console.log(err.message)
        })
  
      }

  return (
    <>
        <HeadTitle />

        <div className="container-detail" >
            <h2>Detail</h2>
            <div className="form-group">
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" readOnly  value={id}   />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName"   value={lname}  onChange={(e) => setLname(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone"   value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"   value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject"   value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company"   value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"  onChange={(e) => setMessage(e.target.value)} value={message} ></textarea>
            </div>
            <div className="container-btn">
                <button className="btn primary-btn" onClick={handlesubmit}>Save</button>
                <Link className="btn back-btn" to="/list-customer">Back to List</Link>
            </div>
        </div>
        

    </>
  )
}

export default EditCustomer