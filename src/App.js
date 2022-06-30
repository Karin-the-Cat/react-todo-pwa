import React from 'react';
import { AuthProvider } from './provider/AuthProvider'
import logo from './logo.svg';
import './App.css';
import './service/firebase'
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <AuthProvider>
      <Header></Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
