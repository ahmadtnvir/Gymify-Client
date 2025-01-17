import { Helmet } from "react-helmet-async";

const RouteNaming = ({ name }) => {
  return (
    <div>
      <Helmet>
        <title>GYMIFY | {name}</title>
      </Helmet>
    </div>
  );
};

export default RouteNaming;
