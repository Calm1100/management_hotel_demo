import { useEffect, useState } from "react";
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import { Link, useParams } from "react-router-dom";

const DetailCustomer = () => {
    const { customerId } = useParams();
    const [customerData, setCustomerData] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/customer/" + customerId).then((res) => {
            return res.json();
        }).then((resp) => {
            setCustomerData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

  return (
    <>
        <HeadTitle />
        {
            customerData &&
            <div className="container-detail">
                <h2>Detail</h2>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="id" readOnly value={customerData.id} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" readOnly value={customerData.fname} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" readOnly value={customerData.lname} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" readOnly value={customerData.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" readOnly value={customerData.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" readOnly value={customerData.subject} />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" name="company" readOnly value={customerData.company} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" readOnly value={customerData.message}></textarea>
                </div>
                <div className="container-btn">
                    <Link className="btn back-btn" to="/list-customer">Back to Listing</Link>
                </div>
            </div>
        }

    </>
  )
}

export default DetailCustomer