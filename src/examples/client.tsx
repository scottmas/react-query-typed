import React, { useEffect } from "react";
import { render } from "react-dom";
import type { apiType } from "./api";
import { createTypedBackendForClient } from "../";

const {endpoints, useEndpoint} = createTypedBackendForClient<apiType>()


render(<App />, document.getElementById("root"));

function App() {

  const resp = useEndpoint(endpoints.accounts.anotherCoolAccountsFn({bar: 1, blah: 'as'}))

  return resp.isSuccess ? <div>{resp.data.waddup}</div> : null
}
