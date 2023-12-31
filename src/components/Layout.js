import logo from '../logo.svg';

import Navbar from './Navbar';

import TableStudent from './TableStudent';
import R01 from './R01';
import R11 from './R11';
import R23 from './R23';
import R16 from './R16';
import R17 from './R17';
import Login from './Login';



function Layout() {
    return (
        <>
            <Navbar />
            <div className="container">
            <TableStudent />
            <R01 />
            <R11 />
            <R23/>
            <R16/>
            <R17/>

            <Login />
            </div>
        </>
    );
}

export default Layout;
