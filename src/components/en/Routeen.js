import React, { useContext } from "react";
import { CourseContext } from "../../App";
import Routeangularen from "./Routeangularen";
import Routereacten from "./Routereacten";
import Routecsharpen from "./Routecsharpen";
import Routesqlen from "./Routesqlen";
import Routeagileen from "./Routeagileen";
import Routefrontenden from "./Routefrontenden";
import Routepresentationen from "./Routepresentationen";

export default function Routeen() {
  const course = useContext(CourseContext);

  const courseComponent = () => {
    switch (course) {
      case "dotnet":
        return <Routecsharpen />;
      case "react":
        return (
          <>
            <Routefrontenden />
            <Routereacten />
          </>
        );
      case "angular":
        return (
          <>
            <Routefrontenden />
            <Routeangularen />
          </>
        );
        case "sql":
          return (
            <>
              <Routefrontenden />
              <Routesqlen />
            </>
          );
          case "agile":
            return (
              <>
                <Routeagileen />
              </>
            );
      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <>
      <Routepresentationen />
      {courseComponent()}
    </>
  );
}
