import React from "react";

// icons:
import { ReactComponent as ArrowUp } from "../assets/images/arrow-up.svg";

function Scroll_to_up() {
  return (
    <div className="scroll_to_up" onClick={() => window.scroll(0, 0)}>
      <ArrowUp />
    </div>
  );
}

export default Scroll_to_up;
