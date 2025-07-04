import React, { useState } from 'react';
import { auth } from './FirebaseConfig';
import { signInWithEmailAndPassword, deleteUser } from 'firebase/auth';
import './index.css';

function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !currentPassword) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      // Sign in the user
      const userCredential = await signInWithEmailAndPassword(auth, email, currentPassword);
      const user = userCredential.user;

      // Delete the user
      await deleteUser(user);
      setSuccess('Account successfully deleted.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="delete-container">
      <div className="delete-form-wrapper">
        <h2 className="delete-heading">Delete Account</h2>
        <form onSubmit={handleDelete} className="delete-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
          {success && <p style={{ color: 'green', fontSize: '0.9rem' }}>{success}</p>}
          <button type="submit" className="delete-button">Delete Account</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccount;
