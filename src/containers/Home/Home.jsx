import React, {Component} from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ImageHeader from './ImageHeader';
import SectionBasic from './SectionBasic';
import SectionNavbars from './SectionNavbars';
import SectionTabs from './SectionTabs';
import SectionPagination from './SectionPagination';
import SectionNotifications from './SectionNotifications';
import SectionTypo from './SectionTypo';
import SectionJsComponents from './SectionJsComponents';
import SectionCarousel from './SectionCarousel';
import SectionExample from './SectionExample';
import SectionDownload from './SectionDownload';

class Home extends Component {
	render() {
		return (
			<div className="index-page">
				<Header />

				<ImageHeader />
	      <div className="main main-raised">
					<SectionBasic />
					<SectionNavbars />
					<SectionTabs />
					<SectionPagination />
					<SectionNotifications />
					<SectionTypo />
					<SectionJsComponents />
					<SectionCarousel />
					<SectionExample />
					<SectionDownload />
	      </div>

				<Footer />
			</div>
		);
	}
}

export default Home;
