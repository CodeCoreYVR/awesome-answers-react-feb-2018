import React from "react";

function SignInForm (props) {
  const {
    email,
    password,
    onChange = () => {},
    onSubmit = () => {}
  } = props;

  const handleChange = name => event => {
    onChange({[name]: event.currentTarget.value})
  }


  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}>
      <div>
        <label htmlFor='email'>Email</label> <br />
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={handleChange('email')}
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleChange('password')}
        />
      </div>

      <div>
        <input type='submit' value='Sign In'/>
      </div>
    </form>
  )
}

export { SignInForm }
