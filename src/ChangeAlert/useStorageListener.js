import React from "react";

function useStorageListener(sincroinze) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("hubo cambios en TODOS_V1");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincroinze();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
