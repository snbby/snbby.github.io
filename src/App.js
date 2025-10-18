import './App.css';
import pandaImg from './images/panda.jpg'


function App() {
  return (
    <div>
      <img src={pandaImg} alt='Maxim Malyshev' className='profile'/>
      <h1>Maxim Malyshev</h1>
      <h4>Software Engineer</h4>
    </div>
  );
}

export default App;
