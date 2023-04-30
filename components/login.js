import React from 'react';
import './styles.css'; // Assuming the styles are in a separate file

function LoginForm() {
  return (
    <div className="container">
      <div className="box">
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
