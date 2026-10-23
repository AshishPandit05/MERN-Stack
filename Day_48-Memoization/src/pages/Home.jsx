import React from "react";

// -------------Normal fuction component-------------
// const Home = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// --------------- memoiz method 1 ------------------------
// const Home = React.memo(() => {
//   // pass in React.memo( all data)
//   console.log("Home rendering");

//   return (
//     <div>
//       <h1>This is Home page</h1>
//     </div>
//   );
// });

// // --------------- memoiz method 2 ------------------------
const Home = () => {
  console.log("Home rendering");

  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};
export default React.memo(Home);

// export default Home;
