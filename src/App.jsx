import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout
import MyLayout from './layouts/MyLayout';

import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/chiSiamo" element={<ChiSiamo />} />
          <Route path="/products" element={<Prodotti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
