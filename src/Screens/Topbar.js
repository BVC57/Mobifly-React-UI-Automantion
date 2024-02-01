import React from "react";

function Topbar() {
  return (
    <div className="Topbar">
      <div>
        <img
          src="Icons/mobiflyicon.png"
          alt="Mobifly Icon"
          height="30px"
          width="78px"
        />
      </div>

      <div>
        <img
          src="Icons/adminicon.png"
          alt="admin"
          height="18px"
          width="18px"
        ></img>
        <p>Admin</p>
      </div>
    </div>
  );
}

export default Topbar;
