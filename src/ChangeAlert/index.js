import React from "react";
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toogleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios!</p>
        <button
          onClick={() => toogleShow(false)}
        >
          Volver a cargar la informacion
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };