import React from "react";
import { DNA } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={loaderStyles}>
      <DNA
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

// Стилі для центрування
const loaderStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // Рівномірне центрування
  zIndex: 1000, // Лоадер зверху всіх інших елементів
};
