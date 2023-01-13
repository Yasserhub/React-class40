import AllProducts from "./fake-data/AllProducts";

const FakeJewelry = () => {
  const fakeData = AllProducts();

  const jewelryData = fakeData.filter((data) => data.category === "jewelery");

  return (
    <div>
      <ul className="products">
        {jewelryData.map((jewelry) => (
          <li key={jewelry.id}>
            <a href="http://localhost:3000">
              <img src={jewelry.image} alt=""></img>
            </a>

            <h6> {jewelry.title}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeJewelry;
