import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../login';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path='/auditoria' element={<Auditoria />} /> */}
            </Routes>
        </Router>
    )
}

export default App