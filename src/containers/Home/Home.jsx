import React, {Component} from 'react';

import Header from './Header';
import HomeBasic from 'components/HomeBasic/HomeBasic';
import HomeNavbars from 'components/HomeNavbars/HomeNavbars';
import HomeTabs from 'components/HomeTabs/HomeTabs';
import HomePagination from 'components/HomePagination/HomePagination';
import HomeNotifications from 'components/HomeNotifications/HomeNotifications';
import HomeTypo from 'components/HomeTypo/HomeTypo';
import HomeJsComponents from 'components/HomeJsComponents/HomeJsComponents';
import HomeCarousel from 'components/HomeCarousel/HomeCarousel';
import HomeExample from 'components/HomeExample/HomeExample';

class Home extends Component {
	render() {
		return (
			<div className="index-page">
				<Header />

	      <div className="main main-raised">
					<HomeBasic />
					<HomeNavbars />
					<HomeTabs />
					<HomePagination />
					<HomeNotifications />
					<HomeTypo />
					<HomeJsComponents />
					<HomeCarousel />
					<HomeExample />
	      </div>
			</div>
		);
	}
}

export default Home;
