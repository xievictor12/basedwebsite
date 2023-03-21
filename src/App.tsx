import './App.scss';

import Page from "./components/page";
import Navbar from './components/nav';

function App() {

  // <Page contentType='Footer'></Page>

  return (
    <div className="App">
      <Navbar/>
      <div className="App-body">
        <Page contentType="Landing"/>
        <Page contentType='Bio'/>
        <Page contentType='Music'/>
        <Page contentType='Blog'/>
        <Page contentType='Contact'/>
      </div>
    </div>
  );
}

export default App;
