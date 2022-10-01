import Menu from "./components/Menu";
import FeaturedItems from "./components/FeaturedItems";
import TopCreators from "./components/TopCreators";
import SearchBar from "./components/SearchBar";
import Market from "./components/Market";
import { Route, Routes } from "react-router-dom"



function App() {
  return (
   <>
   
   <Menu/>
   <div> 
   <Routes> 
   <Route path="/market" element={<Market />} />
   </Routes>
   </div>
   <SearchBar/>
   <FeaturedItems/>
   <TopCreators/>
   
   </>
  );
}

export default App;
