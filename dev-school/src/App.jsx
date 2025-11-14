import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  var [users, setUsers] = useState([])
  var [firstName, setFirstName] = useState('')
  var [lastName, setLastName] = useState('')
  var [editUser, setEditUser] = useState(null)
  var [selectedUser, setSelectedUser] = useState(null)

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
  
  async function putUser(id, updateData) {
    try {
      const response = await axios.put(`https://65f45089f54db27bc021609a.mockapi.io/users/${id}`,
        updateData
      );
      
      setUsers(prevUsers => 
        prevUsers.map(user => user.id === id ? response.data : user)
      );

      return response.data;

    } catch (error) {
      console.error(error);
    }
  }

  function handleEditForm(user){
    setEditUser(user.id);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }

  async function handleEditBtn(e){
    e.preventDefault();
    if(!editUser) return;

    await putUser(editUser, {firstName, lastName});

    setEditUser(null);
    setFirstName('');
    setLastName('');
  }

  async function deleteUser(id) {
    try {
      const response = await axios.delete(`https://65f45089f54db27bc021609a.mockapi.io/users/${id}`);
      
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id )
      );

      return response.data;

    } catch (error) {
      console.error(error);
    }
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
                          <button className="btn btn-primary" onClick={() => handleEditForm(data)}>Edit</button>
                          <button className="btn btn-danger" onClick={()=> deleteUser(data.id)}>Delete</button>
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
              <button type="submit" className="btn btn-primary">{editUser ? 'Update' : 'Submit'}</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default App
