import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/home/Index";
import Login from "./components/auth/login";
import "./assets/css/main.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Index />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
