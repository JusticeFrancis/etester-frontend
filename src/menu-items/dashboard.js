// assets
import { IconBook, IconDashboard, IconShadow, IconUserCheck, IconDatabaseExport } from '@tabler/icons';

// constant
// constant
const icons = {
    IconBook,
    IconDashboard,
    IconShadow,
    IconUserCheck,
    IconDatabaseExport
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Test',
            type: 'item',
            url: '/test',
            icon: icons.IconBook,
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Leader Board',
            type: 'item',
            url: '/ladder-board',
            icon: icons.IconDatabaseExport,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
