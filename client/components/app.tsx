import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import History from './History';
import Calculator from './Calculator';
import Hello from './Hello';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};