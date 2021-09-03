import React from "react";
import { Route, Redirect } from "react-router-dom";

//#region sql
import BetweeninPage from "../../pages/en/sql/Betweenin";
import CasePage from "../../pages/en/sql/Case";
import ConstraintPage from "../../pages/en/sql/Constraint";
import FuncprocPage from "../../pages/en/sql/Funcproc";
import HavinganyallPage from "../../pages/en/sql/Havinganyall";
import IndexPage from "../../pages/en/sql/Index";
import JoinPage from "../../pages/en/sql/Join";
import LikePage from "../../pages/en/sql/Like";
import SqlPage from "../../pages/en/sql/Sql";
import StatementsPage from "../../pages/en/sql/Statements";
import SubsetsPage from "../../pages/en/sql/Subsets";
import TableviewPage from "../../pages/en/sql/Tableview";
import TransactionPage from "../../pages/en/sql/Transaction";
import UnionPage from "../../pages/en/sql/Union";
//#endregion

export default function Routesqlen() {
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
