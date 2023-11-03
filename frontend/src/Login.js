import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from "axios";

const baseURL = "http://localhost:8080/login/auth";
const user = null;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(null);
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

/*React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLogin(response.data);
    });
  }, []);

if (!login) return null;
*/
/*React.useEffect(() => {
  axios.get(`${baseURL}/auth`).then((response) => {
    setAuth(response.data);
  });
}, []);*/

const handleLogin = async () => {
  // Implement your authentication logic here
  // For this example, we'll simulate a successful login and set the user object.
  //const user = { displayName: 'username' };

  axios
      .post(baseURL, {
        email: username,
        password: password
      },{
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
          'Authorization' : 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTIzQGdtYWlsLmNvbSIsImV4cCI6MTcwMTU1NzcyNiwibmFtZSI6InVzZXIxMjMiLCJlbWFpbCI6InVzZXIxMjNAZ21haWwuY29tIn0.QvYJfmIv_n4jTE1QBwYnyShfCy_IlOuSWou-S4z_jccLKV8YI1fFtBItOkQvk9FcB9Xj8BPSyFMvKxzrNoLSmA'
        }
      })
      .then((response) => {
        console.log(response);
        setAuth(response.data.Authorization);
        console.log('----------------------------------------------------')
        console.log(auth)
        console.log('----------------------------------------------------')
      }).catch(function (error) {
        console.log(error);
      });

  if (!auth) {
    console.log('No authentication')
    return "login failed!"
  }else{
    // Redirect to the main page after successful login
    navigate('/main', { state: user });
    console.log('authenticated')
  }

  /*try {
    const response = await axios.post(baseURL, {
      email: username,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }
    });

    console.log(response);
    setAuth(response.Authorization);
    console.log('----------------------------------------------------')
    console.log(auth)
    console.log('----------------------------------------------------')
    if (!auth) {
      console.log('No authentication');
      return "login failed!";
    } else {
      // Redirect to the main page after successful login
      console.log('authenticated');
      navigate('/main', { state: user });
    }
  } catch (error) {
    console.log(error);
  }*/

};



  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
