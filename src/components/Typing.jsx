import React from "react";
import Typewriter from "typewriter-effect";
import '../styles/typing.css';

function Typing() {
  return (
    <div className="typing-effect"> {/* Wrap Typewriter in a div */}
      <Typewriter
        options={{
          strings: [
            "Stay tuned for updates—there’s more to come!"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Typing;