import React, {Component} from 'react';
<<<<<<< HEAD
import NavigationView from './NavigationView';
import { connect } from 'react-redux';

import { SetPageLocation } from '../_actions/page-action.js';
import { pageSelector } from '../_selectors/page-selector';
=======
import { NavBar } from './NavBar';
>>>>>>> d353b0c... Moving from sidenav -> topnav

class Navigation extends Component {
	constructor(props){
		super(props);
		this.state = {
            page:this.props.page
        }

		this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(pagelocation){	
		this.setState({page: pagelocation});
		this.props.changePage(pagelocation);
	}

	render() {
		return ( 
<<<<<<< HEAD
			<NavigationView
				width={this.props.width}
				onChangePage={this.onChangePage}/>
=======
			<NavBar
				width={this.props.width}/>
>>>>>>> d353b0c... Moving from sidenav -> topnav
		)
	}
}

const mapStateToProps = (state,props) => {
	return{
		page: pageSelector(state)
	}
  }

const mapActionToProps = {
	changePage: SetPageLocation
}

export default connect(mapStateToProps, mapActionToProps)(Navigation);