import React, { useEffect } from "react";
import { render } from "react-dom";
import type { apiType } from "./api";
import { createTypedBackendForClient } from "../../";

const typedBackend = createTypedBackendForClient<apiType>({
  shouldOnlyIncludeTypes: true,
});

render(<App />, document.getElementById("root"));

function App() {

  const resp = typedBackend.accounts.anotherCoolAccountsFn.useData({bar: 1, blah: ''})

  return resp.isSuccess ? <div>{resp.data.waddup}</div> : null
}
