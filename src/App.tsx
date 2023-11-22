import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';



function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/categorias" element={<ListaCategorias />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;