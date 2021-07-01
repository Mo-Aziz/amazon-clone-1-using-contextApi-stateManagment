import React from "react";
import Product from "../../components/product/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home-banner"
        />

        <div className="home_row">
          <Product
          id="125457"
            title="RESPAWN 900 Racing Style Gaming Recliner, Reclining Gaming Chair, in Gray RSP 900 GRY"
            image=" https://images-na.ssl-images-amazon.com/images/I/71gQmb2vlxL._AC_SL1500_.jpg"
            rating={2}
            price={19.9}
          />
          <Product rating={3}
           id="112232grl"
           title="Char-Broil 463655621 Performance TRU-Infrared 2-Burner Cabinet Style Liquid Propane"
           image="https://images-na.ssl-images-amazon.com/images/I/71XRbR1f1QL._AC_SL1500_.jpg"
           price={150.99}
            />
        </div>
        <div className="home_row">
          <Product id="112232"
          title="Furniwell Gaming  Gaming High Back Computer Chair"
          image="https://images-na.ssl-images-amazon.com/images/I/81xj-c8Q1pL._AC_SL1500_.jpg"
          price={200.99}
          rating={5} />
         <Product
          id="1235454"
          title="Mendini Full Size 4/4 MV-Blue Solid, Metallic Blue"
          price={200.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7190raoedOL._AC_SL1500_.jpg"/>
          <Product
          id="1235454kk"
          title="Patriotic Children's Drawing USA Flag 4th of July"
          price={14.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/718l8UVvhdL._AC_UY741_.jpg" />
        </div>
        <div className="home_row">
          
          <Product
          id="1235454"
          title="Mendini Full Size 4/4 MV-Blue Solid Wood Violin with Tuner, Lesson Book, Shoulder Rest, Extra Strings, Bow and Case, Metallic Blue"
          price={200.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7190raoedOL._AC_SL1500_.jpg"/>
          <Product
          id="1235454"
          title="Mendini Full Size 4/4 MV-Blue Solid Wood Violin with Tuner, Lesson Book, Shoulder Rest, Extra Strings, Bow and Case, Metallic Blue"
          price={200.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71KYhORbEUL._AC_SL1500_.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
