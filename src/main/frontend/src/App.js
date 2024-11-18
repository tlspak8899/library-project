import logo from './logo.svg';
import './App.css';
import MainPage from './page/mainPage'
import Navigation from "./component/navigation";

function App() {
  return (
      <div>
        <Navigation></Navigation>
        <MainPage></MainPage>
      </div>
  );
}

export default App;
