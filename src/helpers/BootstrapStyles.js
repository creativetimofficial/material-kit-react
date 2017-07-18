import {
	Navbar,
	Pagination,
} from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Navbar, 'info', 'primary', 'success', 'transparent', 'danger', 'warning');
addStyle(Pagination, 'info', 'primary', 'success', 'danger', 'warning');
