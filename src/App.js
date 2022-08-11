import Sidebar from "./components/Sidebar";
import ContentLeft from "./components/Sidebar/Content/ContentLeft";
import ContentRight from "./components/Sidebar/Content/ContentRight";

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar/>
      <ContentLeft/>
      <ContentRight/>
    </div>
  );
}
    
export default App;
