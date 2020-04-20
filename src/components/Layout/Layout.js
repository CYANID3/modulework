import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "../Navigation/Footer/Footer";

const Layout = (props) => {
  return (
      <Fragment>
        <Toolbar/>
        <main className="Layout-Content" style={{marginTop: '30px'}}>
          {props.children}
        </main>
        <Footer/>
      </Fragment>
  );
};

export default Layout;
