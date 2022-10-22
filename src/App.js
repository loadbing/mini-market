import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Store } from './components/store';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}
