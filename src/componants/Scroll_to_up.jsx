import React from "react";

// icons:
import { ReactComponent as ArrowUp } from "../assets/images/arrow-up.svg";

function Scroll_to_up() {
  return (
    <span className="scroll_to_up" onClick={() => window.scroll(0, 0)}>
      <ArrowUp />
    </span>
  );
}

export default Scroll_to_up;
