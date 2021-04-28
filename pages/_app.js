import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div>test</div>
      <Component {...pageProps} />
    </>
  );
};

export { App as default };