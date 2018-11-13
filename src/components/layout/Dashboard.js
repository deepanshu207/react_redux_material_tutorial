import React from 'react';
import {cyan600, pink600, purple600, orange600,blue600,purple800} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from './InfoBox';
import DataChart from './DataChart';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

import globalStyles from '../../styles';
import Data from '../../data';

const Dashboard = (props) => {
console.log("%%");
console.log(props.location);
console.log("%%");
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ShoppingCart}
                   color={blue600}
                   title="Total Profit"
                   value="1500k"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ThumbUp}
                   color={cyan600}
                   title="Likes"
                   value="4231"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={purple600}
                   title="Sales"
                   value="460"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
                   color={orange600}
                   title="New Members"
                   value="248"
          />
        </div>
      </div>

      <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <DataChart data={Data.dashBoardPage.dataChart}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <DataChart data={Data.dashBoardPage.dataChart}/>
        </div>

       
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
        </div>

       
      </div>
    </div>
  );
};

// export default Dashboard;

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth:auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) =>  { dispatch(login(email, password))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));


