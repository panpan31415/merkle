import './App.scss';
import Banner from './Banner';
import Header from './Header';
import NewsItems from './NewsItems';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NewsItems />
      {/* <Footer/> */}
    </div >
  );
}

export default App;
