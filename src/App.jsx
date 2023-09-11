import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Signup from './components/Signup';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/LogInForm' element={<SignInForm />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
