import React, { useState ,useEffect } from 'react'
import { useHistory  } from "react-router-dom";
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import "./Customer.css"

const ListCustomer = () => {
  const [customersData, setCustomersData] = useState(null);

  const history = useHistory();

  const LoadDetail = (id) => {
    history.push("/customer/detail/" + id);
  }
  const LoadEdit = (id) => {
    history.push("/customer/edit/" + id);
  }
  const Removefunction = (id) => {
      if (window.confirm('Do you want to remove?')) {
          fetch("http://localhost:8000/customer/" + id, {
              method: "DELETE"
          }).then((res) => {
              alert('Removed successfully.')
              window.location.reload();
          }).catch((err) => {
              console.log(err.message)
          })
      }
  }

  useEffect(() => {
    fetch("http://localhost:8000/customer").then((res) => {
      return res.json();
    }).then((resp) => {
      setCustomersData(resp);
    }).catch((err) => {
      console.error(err);
    })
  }, []);

  return (
    <>
      <HeadTitle />
      <div className="container customer">
        <table className="table table-bordered">
          <thead className="bg-dark text-white">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Company</th>
                <th>Message</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              customersData && 
                customersData.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.fname}</td>
                    <td>{customer.lname}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.subject}</td>
                    <td>{customer.company}</td>
                    <td>{customer.message}</td>
                    <td><a onClick={() => { LoadEdit(customer.id) }} className="btn edit-btn">Edit</a>
                        <a onClick={() => { Removefunction(customer.id) }} className="btn delete-btn">Remove</a>
                        <a onClick={() => { LoadDetail(customer.id) }} className="btn detail-btn">Details</a>
                    </td>
                  </tr>
                ))
            }
            
          </tbody>
          
        </table>
      </div>
    </>
  )
}

export default ListCustomer