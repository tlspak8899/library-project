import logo from './logo.svg';
import './App.css';
import ListPage from './page/list/listPage'
import Navigation from "./component/navigation";

function App() {
  return (
      <div>
        <Navigation></Navigation>
        <ListPage></ListPage>
      </div>
  );
}

export default App;
