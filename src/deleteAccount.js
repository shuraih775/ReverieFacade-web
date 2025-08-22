import React, { useState } from 'react';
import { auth } from './FirebaseConfig';
import { signInWithEmailAndPassword, deleteUser } from 'firebase/auth';

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
      const userCredential = await signInWithEmailAndPassword(auth, email, currentPassword);
      const user = userCredential.user;
      await deleteUser(user);
      setSuccess('✅ Account successfully deleted.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-black px-4">
      <div className="w-full max-w-md  bg-gray-900 shadow-lg rounded-xl p-8 shadow-md shadow-gray-700">
        <h2 className="text-2xl font-bold text-center text-white ">
          Delete Account
        </h2>
        <p className="mt-2 text-sm text-gray-100  text-center">
          Please confirm your email and password to permanently delete your account.
        </p>

        <form onSubmit={handleDelete} className="mt-6 space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-100 ">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100 ">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
          {success && (
            <p className="text-sm text-green-600 dark:text-green-400">{success}</p>
          )}

          <button
            type="submit"
            className="w-full mt-2 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Delete Account
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
          ⚠️ This action cannot be undone.
        </p>
      </div>
    </div>
  );
}

export default DeleteAccount;
