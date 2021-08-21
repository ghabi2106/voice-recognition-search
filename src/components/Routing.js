import React, { useContext } from "react";
import { LangContext } from "../App";
import Routeen from "./en/Routeen";
import Routefr from "./fr/Routefr";

export default function Routing() {
  const lang = useContext(LangContext);
  return <>{lang === "EN" ? <Routeen /> : <Routefr />}</>;
}
