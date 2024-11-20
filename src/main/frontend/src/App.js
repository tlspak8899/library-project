import './App.css';
import MainPage from './page/mainPage';
import Navigation from './component/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './page/list/List';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<MainPage />} /> {/* 메인 페이지 */}
                    <Route path="/list" element={<List />} /> {/* 목록 페이지 */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
