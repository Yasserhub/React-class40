import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ShowAllProducts from "./ShowAllProducts";
import FakeElectronics from "./FakeElectronics";
import FakeJewelry from "./FakeJewelry";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Categories
            </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/Fake:Electronics" className="nav-link active">
                  FAKE: electronics
                </Link>

                <Link to="Fake:Jewelry" className="nav-link active">
                  FAKE: Jewelry
                </Link>

                <Link to="/Fake:Electronics" className="nav-link active">
                  FAKE: men's clothing
                </Link>

                <Link to="Fake:Jewelry" className="nav-link active">
                  FAKE: women's clothing
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ShowAllProducts />}></Route>

          <Route path="/Fake:Electronics" element={<FakeElectronics />}></Route>

          <Route path="/Fake:Jewelry" element={<FakeJewelry />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
