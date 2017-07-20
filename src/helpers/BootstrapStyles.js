import {
	Navbar,
	Pagination,
	Button,
} from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Navbar, 'info', 'primary', 'success', 'transparent', 'danger', 'warning');
addStyle(Button, 'upgrade', 'white', 'twitter', 'facebook', 'google-plus', 'github');
addStyle(Pagination, 'info', 'primary', 'success', 'danger', 'warning');
