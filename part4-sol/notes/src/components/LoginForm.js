import React from 'react'

const LoginForm = ({ handleSubmit, handleUsernameChange, handlePasswordChange,username,password }) => {
  return (
    <div>

      <form onSubmit={handleSubmit} className='note-form'>
        <div className='form__control'>
						Username:
          <input
            id='username'
            type='text'
            value={username}
            name='Username'
            placeholder='Enter username'
            onChange={handleUsernameChange}
          />
        </div>
        <div className='form__control'>
						Password:
          <input
            id='password'
            type='password'
            value={password}
            name='Password'
            placeholder='Enter password'
            onChange={handlePasswordChange}
          />
        </div>
        <button id='login-button' type='submit' className='loginBtn'>
						login
        </button>
      </form>

    </div>
  )
}

export default LoginForm
