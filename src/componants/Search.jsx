import React from "react";

// images:
import { ReactComponent as ServIcon } from "../assets/images/care-search.svg";
import searchImg from "../assets/images/search-acceuil.png";
import { ReactComponent as Star } from "../assets/images/star.svg";
import { Link } from "react-router-dom";

function Search() {
  return (
    <section id="search" className="search section container">
      <div className="search-img">
        <img src={searchImg} alt="acceuil" />
        <div className="quality-feedback">
          <ServIcon />
          <div>
            <p>Quality over Quantity</p>
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </div>
      <div className="search-content">
        <h1 className="text-header">Search the Nearest hospital from you</h1>
        <p className="text-normal">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
          kesehatan dengan fungsi menyediakan pelayanan paripurna
          (komprehensif).
        </p>
        <Link className="button_p" to="#">
          Search
        </Link>
      </div>
    </section>
  );
}

export default Search;
