import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return <h1>This is an error page: {error.message} </h1>;
}
