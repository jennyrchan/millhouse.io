import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const UserSidebar = props => {
  return (
    <sidebar>
      <section>
        <Link to='/users/:userId/orders'> Orders </Link>
      </section>

      <section>
        <Link to='/users/:userId/reviews' > Reviews </Link>
      </section>

      <section>
        <Link to='/users/:userId/settings'> Settings </Link>
      </section>


    </sidebar>
  )
}

/*  --------------   Container ---------------- */

const mapState = state => {
  return {};
}

const mapDispatch = dispatch => {
  return {};
}

export default connect(mapState,mapDispatch)(UserSidebar);