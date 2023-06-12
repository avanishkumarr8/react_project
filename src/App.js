import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from "./main/Main";
import Products from "./admin/Products";
import ProductEdit from "./admin/ProductEdit";
import ProductCreate from "./admin/ProductCreate";


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={Main} />
    <Route path='/admin/Products' Component={Products} />
    <Route path='/admin/Product/:id/Edit' Component={ProductEdit} />
    <Route path='/admin/ProductCreate' Component={ProductCreate} />
    {/* <Route path='/admin/components/SideBar' Component={SideBar} /> */}
    {/* <Route path='/admin/components/Nav' Component={Nav} /> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
