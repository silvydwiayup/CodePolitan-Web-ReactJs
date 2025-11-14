import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  var [users, setUsers] = useState(null)
  var [firstName, setFirstName] = useState('')
  var [lastName, setLastName] = useState('')

  async function getUser() {
    try {
      const response = await axios.get('https://65f45089f54db27bc021609a.mockapi.io/users');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect (() => {
    async function fetchData() {
      const users = await getUser();
      setUsers(users);
    }
    
    fetchData();
  },[]);

  async function postUser(newUser) {
    try {
      const response = await axios.post('https://65f45089f54db27bc021609a.mockapi.io/users',
        newUser
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleBtnSubmit(e) {
    e.preventDefault();

    var newUser = {firstName, lastName}

    var user = await postUser(newUser);
    setUsers([...users, user]);
  }
    

  

  return (
    <div className="container">
        <h1>Codepolitan DevSchool</h1>
        <div className="row" >
          <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>Member</h2>
            <div className="row" >
              {
                users != null ? 
                  users.map((data) =>
                    <div className="col-md-6" key={data.id}>
                      <div className="card" style={{ margin: 10}}>
                        <div className="card-body">
                        <h5 className="card-title">{data.id}</h5>
                          <h5 className="card-title">{data.firstName}</h5>
                          <h5 className="card-title">{data.lastName}</h5>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger">Delete</button>
                        </div>
                      </div>
                    </div> 
                  )
              : null
              
              }
              
              
            </div>
          </div>
          


          <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>Form</h2>
            <form onSubmit={handleBtnSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default App
