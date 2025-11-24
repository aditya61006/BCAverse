import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import './App.css'
import AppRoutes from './Routes/routes.jsx'




function App() {
  return (
    <>
      <Navbar />
      
     <div className="pt-16">
        <AppRoutes />
      </div>


      <Footer />
      
    </>
  );
}

export default App
