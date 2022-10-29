import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Bascket from './pages/bascket';
import DontSearch from './pages/DontSearch';
import Goods from './pages/Goods';
import Ofer from './pages/Ofer';
import NotFound from './pages/NotFound';
import './scss/styil.scss';

import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="wrepper">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Catalog" element={<Catalog />} />
				<Route path="/Bascket" element={<Bascket />} />
				<Route path="/DontSearch" element={<DontSearch />} />
				<Route path="/Catalog/Goods/:id" element={<Goods />} />
				<Route path="/Bascket/Ofer" element={<Ofer />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
