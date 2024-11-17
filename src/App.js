import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./layout/Navbar";
import AppRoutes from './hierarchy/AppRoutes';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <AppRoutes/>
        </BrowserRouter>

    </div>
  );
}

export default App;
