import { Outlet } from 'react-router-dom';
import Navbar from '../Modules/Navbar';
import Footer from '../Modules/Footer';

const MainLayout = () => {
 
    return (
        <div>
        <Navbar></Navbar>

        <Outlet></Outlet>
        
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;