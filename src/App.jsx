import React, { useState } from 'react';
import { useForm, required, minLength } from 'react-nitro-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const initialValues = { name: '', email: '', password: '' };
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (values) => {
    setSubmittedData(values);
    toast.success('Form submitted successfully!');
  };

  const validate = {
    name: required,
    email: required,
    password: minLength(6),
  };

  const { values, handleChange, handleSubmit } = useForm(initialValues, handleFormSubmit);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">React Nitro Form Demo</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            {validate.name(values.name) && <p className="text-red-500 text-sm">{validate.name(values.name)}</p>}
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {validate.email(values.email) && <p className="text-red-500 text-sm">{validate.email(values.email)}</p>}
          </div>

          <div className="space-y-1">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {validate.password(values.password) && <p className="text-red-500 text-sm">{validate.password(values.password)}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
        <ToastContainer />

        {submittedData && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-600">Form Submission Result</h2>
            <pre className="mt-2 p-2 bg-gray-100 rounded-lg text-gray-800 overflow-x-auto">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
