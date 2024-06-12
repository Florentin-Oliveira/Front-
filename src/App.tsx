import { Routes, Route } from 'react-router-dom';
import RotaPrivada from './utils/RotaPrivada';
import SignUpPage from './paginas/Logs/CadastroUser';
import LoginPage from './paginas/Logs/Login';
import ForgotPasswordPage from './paginas/Logs/EsqueceuSenha';
import NotFund from './paginas/NotFund/NotFund';
import Home from './paginas/Home';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            
            <Route element={<RotaPrivada />}>
                <Route path="/" element={<Home />} />
            </Route>
            
            <Route path="*" element={<NotFund />} />
        </Routes>
    );
}

export default App;
