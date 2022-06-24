function Discount() {
  return (
    <div className="content__discount">
      <h1>Discount Item</h1>
      <div className="content__discount__info">
        <div className="content__discount__info__navbar">
          <p className="content__discount__info__navbar__1">Wood Chair</p>
          <p className="content__discount__info__navbar__2">Plastic Chair</p>
          <p className="content__discount__info__navbar__3">Sofa Colletion</p>
        </div>
        <div className="content__discount__info__text">
          <h2>20% Discount Of All Products</h2>
          <h3>Eams Sofa Compact</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </h4>
          <div className="content__discount__info__text__list">
            <ul style={{ listStyleImage: "url('./images/VectorTick.svg')" }}>
              <li>Material expose like metals</li>
              <li>Simple neutral colours.</li>
            </ul>
            <ul style={{ listStyleImage: "url('./images/VectorTick.svg')" }}>
              <li>Clear lines and geomatric figures</li>
              <li>Material expose like metals</li>
            </ul>
          </div>
          <button>Shop Now</button>
        </div>
        <img src="./images/tortuga-01-b 1.svg"></img>
      </div>
    </div>
  );
}
export default Discount;
