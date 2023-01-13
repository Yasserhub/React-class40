import AllProducts from "./fake-data/AllProducts";

const FakeElectronics = () => {
  const fakeData = AllProducts();

  const setFakeData = fakeData.filter(
    (data) => data.category === "electronics"
  );
  return (
    <div>
      <ul className="products">
        {setFakeData.map((electronic) => (
          <li key={electronic.id}>
            <a href="http://localhost:3000">
              <img src={electronic.image} alt=""></img>
            </a>
            <h6> {electronic.title}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeElectronics;
