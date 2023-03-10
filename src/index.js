import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import AddExcel from './component/addExcel';
import GetExcel from './component/getExcel';
import EditExcel from './component/editExcel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/addExcel" element={<AddExcel />}></Route>
      <Route path="/getExcel" element={<GetExcel />}></Route>
      <Route path="/editExcel/:editId" element={<EditExcel />}></Route>
    </Routes>
</BrowserRouter>
);
reportWebVitals();
