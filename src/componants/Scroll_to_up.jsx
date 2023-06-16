import React, { useState, useEffect } from "react";

// icons:
import { ReactComponent as ArrowUp } from "../assets/images/arrow-up.svg";

function Scroll_to_up() {
  const [showGoTop, setshowGoTop] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 800) {
      return setshowGoTop(true);
    } else {
      return setshowGoTop(false);
    }
  };
  // scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <button
      className={showGoTop ? "scroll_to_up" : "scroll_to_up hiden"}
      onClick={() => window.scroll(0, 0)}
    >
      <ArrowUp />
    </button>
  );
}

export default Scroll_to_up;
