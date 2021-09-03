import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region sql
import BetweeninPage from "../../pages/fr/sql/Betweenin";
import CasePage from "../../pages/fr/sql/Case";
import ConstraintPage from "../../pages/fr/sql/Constraint";
import FuncprocPage from "../../pages/fr/sql/Funcproc";
import HavinganyallPage from "../../pages/fr/sql/Havinganyall";
import IndexPage from "../../pages/fr/sql/Index";
import JoinPage from "../../pages/fr/sql/Join";
import LikePage from "../../pages/fr/sql/Like";
import SqlPage from "../../pages/fr/sql/Sql";
import StatementsPage from "../../pages/fr/sql/Statements";
import SubsetsPage from "../../pages/fr/sql/Subsets";
import TableviewPage from "../../pages/fr/sql/Tableview";
import TransactionPage from "../../pages/fr/sql/Transaction";
import UnionPage from "../../pages/fr/sql/Union";
//#endregion

export default function Routesqlfr() {
  return (
    <>
      {
        //#region sql
      }
      <Route path="/betweenin" component={BetweeninPage} />
      <Route path="/case" component={CasePage} />
      <Route path="/constraint" component={ConstraintPage} />
      <Route path="/funcproc" component={FuncprocPage} />
      <Route path="/havinganyall" component={HavinganyallPage} />
      <Route path="/index" component={IndexPage} />
      <Route path="/join" component={JoinPage} />
      <Route path="/like" component={LikePage} />
      <Route path="/sql" component={SqlPage} />
      <Route path="/statements" component={StatementsPage} />
      <Route path="/subsets" component={SubsetsPage} />
      <Route path="/tableview" component={TableviewPage} />
      <Route path="/transaction" component={TransactionPage} />
      <Route path="/union" component={UnionPage} />
      {
        //#endregion
      }

      <Route path="*" render={() => <Redirect to="/sql" />} />
    </>
  );
}
