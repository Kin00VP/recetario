import logo from '../logo.svg';
import './App.css';
import AppContent from './AppContent.js';
import Header from './Header.js';

function App() {
    return (
        <div>
            <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} />
            <div className='conatiner-fluid'>
                <div className='row'>
                    <div className='col'>
                        <AppContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;