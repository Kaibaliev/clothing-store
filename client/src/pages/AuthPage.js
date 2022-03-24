import React, {useContext,useState, useEffect } from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/massege.hook'
import {AuthContext} from '../context/AuthContext'


export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {
    }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {
    }
  }


  return (
    <div className="row">
      <div className="col s5 offset-s3">
        <h4>Baby store</h4>
        <div className="card deep-purple darken-3">
          <div className="card-content white-text">
            <span className="card-title">Log In</span>
            <div>
              <div className="input-field">
                <input id="email"
                       type="text"
                       name="email"
                       onChange={changeHandler}/>
                <label htmlFor="email">Enter your e-mail</label>
              </div>
              <div className="input-field">
                <input id="Password"
                       type="password"
                       name="password"
                       onChange={changeHandler}/>
                <label htmlFor="password">Enter password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    style={{marginRight: 20}}
                    onClick={loginHandler}
                    disabled={loading}>
              Log In
            </button>
            <button className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={registerHandler}
                    disabled={loading}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}
