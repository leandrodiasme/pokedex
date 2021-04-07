import logo from './logo.svg';
import Header from './Header';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

function App() {
  return (
    <Header/>
  );
}

export default App;
