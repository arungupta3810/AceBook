import "../src/Assets/common.css"
import Layout from "./Layout";
import routes from "./routes"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/reducer"
import ErrorBoundary from "./Components/Error";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        {routes?.map(e=>
        e.route==="common"? <Route
         exact 
         path={e.path}
         element={<ErrorBoundary ><Layout component={<e.component/>}/> </ErrorBoundary>}
        />:
        <Route
         exact 
         path={e.path}
         element={<ErrorBoundary ><e.component/></ErrorBoundary>}
        />
        )}
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
