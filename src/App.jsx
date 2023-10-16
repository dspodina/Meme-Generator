import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-grey">
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
