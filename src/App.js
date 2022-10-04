import Home from "./routes/home/home.component";
import SingIn from "./routes/sing-in/sing-in.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/home/navigation/navigation.component";

const Shop = () => {
  return <h1> neata</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="singIn" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
