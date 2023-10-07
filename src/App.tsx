import { Header, HeaderSlider, PreHeader } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="w-full relative">
        <PreHeader />
        <Header />
        <HeaderSlider />
        <Home />
        <h1 className="text-3xl">Hello There</h1>
      </div>
    </>
  );
}

export default App;
