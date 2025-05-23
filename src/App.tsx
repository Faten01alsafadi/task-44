
import logo from "./assets/icon/logo.svg";
import "./App.css";
import Nav from "./sections/Nav/Nav";
import HomeSection from "./sections/HomeSection/HomeSection";
import location from "./assets/icon/location.svg";
import dollar from "./assets/icon/dollar-circle.svg";
import house from "./assets/icon/house.svg";
import How from "./sections/How/How";
import house1 from "./assets/icon/Group-1.svg";
import house2 from "./assets/icon/Group 1166.svg";
import house3 from "./assets/icon/Group-2.svg";
import Find from "./sections/Find/Find";
import Trending from "./sections/Trending/Trending";
import Deals from "./sections/Deals/Deals";
import Footer from "./sections/Footer/Footer";

function App() {
 
  return (
    <>
      <Nav
        logo={logo}
        navItems={[
          { link: "Home" },
          { link: "About" },
          { link: "Service" },
          { link: "New Property" },
          { link: "Contact" },
        ]}
        btnText="Login"
      />
      <HomeSection
        h1="Discover a place"
        h2="you will love to live  "
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit "
        p2="Imperdiet tempus felis vitae sit est quisque."
        cards={[
          { h4: "Location", p: "Ahmedabad, India", img: location },
          { h4: "Price", p: "$1000 - $10,000", img: dollar },
          { h4: "Type of Property", p: "Apartment", img: house },
        ]}
      />
      <How
        h2="How it Works"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        cards={[
          {
            img: house1,
            h4: "Search Apartment",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
          },
          {
            img: house2,
            h4: "Select Apartment",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
          },
          {
            img: house3,
            h4: "Confirm Apartment",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
          },
        ]}
      />
      <Find
        h2="Find Dream Home"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <Trending
        h2="Most Trending"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
        cards={[
          {
            img: "/img/Rectangle 50(1).png",
            h4: "$300000",
            span: "Luxury Apartment in California",
            p: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          {
            img: "/public/img/Rectangle 50(2).png",
            h4: "$300000",
            span: "Luxury Apartment in California",
            p: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
          },
          { img: "/public/img/Rectangle 50(3).png",   h4: "$300000",
          span: "Luxury Apartment in California",
          p: "1901 Thornridge Cir. Shiloh, Hawaii 81063",},
          { img: "/public/img/Rectangle 50.png",    h4: "$300000",
          span: "Luxury Apartment in California",
          p: "1901 Thornridge Cir. Shiloh, Hawaii 81063",},
          { img: "/public/img/Rectangle 51.png",    h4: "$300000",
          span: "Luxury Apartment in California",
          p: "1901 Thornridge Cir. Shiloh, Hawaii 81063", },
          { img: "/public/img/Rectangle 52.png",    h4: "$300000",
          span: "Luxury Apartment in California",
          p: "1901 Thornridge Cir. Shiloh, Hawaii 81063",},
        ]}
      />
      <Deals h2="Best Real Estate Deals" p="Lorem ipsum dolor sit amet, consectetur adipiscing eli" cards={[
       
          {
            img: "/public/img/Image 03.jpg",
            span1: "Featured",
            span2: "3D",
            category:"a"
          },
          {
            img: "/public/img/Card 02.png",
            span1: "Featured",
            span2: "3D",
            category:"c"
          },
          {
            img: "/public/img/Card 03.png",
            span1: "Featured",
            span2: "3D",
            category:"x"
         
          },
        ]}
        items={[
          {
         h4:"Residential Property",
         category:"a"
          },
          {
            h4:"Commercial Property",
            category:"c"
          },
          {
            h4:"Agriculture Property",
            category:"x"
          },
        
        ]}/>
        <Footer/>
    </>
  );
}

export default App;
