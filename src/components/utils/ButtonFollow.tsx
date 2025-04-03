import { useState } from "react";

interface ToggleInterface{
  isTrue: boolean;
}

function ToggleFollow( {isTrue} : ToggleInterface ){

  const [follow, setFollow] = useState<boolean>(isTrue);

  const following = () => {
    setFollow(!follow)
  }

  return(
    <button onClick={following}
    style={{
      color: follow ? "gray": "white", 
      fontWeight: "bold",
      borderWidth: "3px",
      borderStyle: "solid",
      borderRadius: "9999px",
      borderColor: follow ? "gray": "white",
      padding: "8px 16px",
      marginLeft: "auto",
    }}>
      {follow ? <span>Following</span>:<span>Follow</span>}
      </button>
  )
}

export default ToggleFollow;
