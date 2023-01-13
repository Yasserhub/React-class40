import AllProducts from "./fake-data/AllProducts";

const ShowAllProducts = () => {
  const fakeData = AllProducts();
  console.log(fakeData);
  return (
    <div>
      <ul className="products">
        {fakeData.map((data) => (
          <li key={data.id}>
            <a href="http://localhost:3000">
              <img src={data.image} alt=""></img>
            </a>
            <h6> {data.title}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShowAllProducts;
