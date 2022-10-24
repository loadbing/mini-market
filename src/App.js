import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './components/shop';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}
