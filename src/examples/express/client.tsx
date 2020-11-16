import React from "react";
import { render } from "react-dom";
import type { apiType } from "./api";
import { createTypedBackendForClient } from "../../";

const typedBackend = createTypedBackendForClient<apiType>({
  shouldOnlyIncludeTypes: true,
});

render(<App />, document.getElementById("root"));

function App() {
  if(Math.random() > 0.5){
    return null
  }

  const resp = typedBackend.accounts.anotherCoolAccountsFn.use({bar: 1, blah: 's'})

  return resp.isSuccess ? <div>{resp.data.waddup}</div> : null
}
