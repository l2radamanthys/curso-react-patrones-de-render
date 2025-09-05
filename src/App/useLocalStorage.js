import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincroizedItem] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        setSincroizedItem(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  const sincronizeItem = () => {  //mas que sincronize forzar reloading
    setLoading(true);
    setSincroizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

export { useLocalStorage };