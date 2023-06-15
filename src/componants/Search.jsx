import React from "react";

// images:
import { ReactComponent as ServIcon } from "../assets/images/care-search.svg";
import searchImg from "../assets/images/search-acceuil.png";

function Search() {
  return (
    <section id="search" className="search section container">
      <img src={searchImg} alt="acceuil" />
      <div>
        <h1 className="text-header">Search the Nearest hospital from you</h1>
        <p className="text-normal">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
          kesehatan dengan fungsi menyediakan pelayanan paripurna
          (komprehensif).
        </p>
        <a className="button_p" href="#">
          Search
        </a>
      </div>
    </section>
  );
}

export default Search;
