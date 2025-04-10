import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = typeof useRouteError();

  return (
    <>
      <div>Something went wrong! our team is fixing it.</div>
      <span>{err}</span>
    </>
  );
};

export default Error;
