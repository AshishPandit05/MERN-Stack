import React from "react";

const About = ({ user }) => {
  console.log("About rendering");
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
};

export default React.memo(About, () => {});
