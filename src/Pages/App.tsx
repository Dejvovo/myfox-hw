import React, { useEffect } from "react";
import { clientId, getCustomer } from "../GraphQL/queries";

export const App = () => {
  useEffect(() => {
    getCustomer({ id: clientId });
  });

  return <div>The magic can begin</div>;
};
