import {Card} from "./Components/Card/Card";
import {Header} from "./Components/Header/Header";
import {Drawer} from "./Components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper clear">

        <Drawer/>
      <Header/>
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/images/search.svg" alt="search"/>
            <input placeholder="Поgиск..."/>
          </div>
        </div>
        <div className="d-flex">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
