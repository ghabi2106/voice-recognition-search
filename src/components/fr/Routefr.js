import React, { useContext } from "react";
import { CourseContext } from "../../App";
import Routeangularfr from "./Routeangularfr";
import Routedotnetfr from "./Routedotnetfr";
import Routereactfr from "./Routereactfr";
import Routefrontendfr from "./Routefrontendfr";
import Routepresentationfr from "./Routepresentationfr";

export default function Routefr() {
  const course = useContext(CourseContext);
  const courseComponent = () => {
    switch (course) {
      case "dotnet":
        return <Routedotnetfr />;
      case "react":
        return (
          <>
            <Routefrontendfr />
            <Routereactfr />
          </>
        );
      case "angular":
        return (
          <>
            <Routefrontendfr />
            <Routeangularfr />
          </>
        );

      default:
        return <h1>No project match</h1>;
    }
  };
  return (
    <>
      <Routepresentationfr />
      {courseComponent()}
    </>
  );
}
