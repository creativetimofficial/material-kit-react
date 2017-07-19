import React, {Component} from 'react';

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
				<div className="header header-filter" style={{ height: '90vh' }}>
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-offset-2">
								<div className="brand">
									<h1>Material Kit.</h1>
									<h3>A Badass Bootstrap UI Kit based on Material Design.</h3>
								</div>
							</div>
						</div>

					</div>
				</div>

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
