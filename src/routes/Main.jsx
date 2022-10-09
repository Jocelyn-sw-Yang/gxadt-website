import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portal from '../screen/Portal';
import SolutionCase from '../screen/SolutionCase';
import Company from '../screen/Company';
import ContactUs from '../screen/ContactUs';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portal />}>
        </Route>
        <Route path='SolutionCase' element={<SolutionCase />}>
          <Route
            path="agricultural-products"
            element={<SolutionCase />}
          />
          <Route
            path="sugar-industry"
            element={<SolutionCase />}
          />
        </Route>
        <Route path='Company' element={<Company />}>
        </Route>
        <Route path='ContactUs' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Main;
