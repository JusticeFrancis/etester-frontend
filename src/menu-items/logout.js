// assets
import { IconLogout } from '@tabler/icons';

// constant
// constant
const icons = {
    IconLogout
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const logout = {
    id: 'logout',
    title: 'Logout',
    type: 'group',
    children: [
        {
            id: 'default3',
            title: 'logout',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconLogout,
            breadcrumbs: false
        }
    ]
};

export default logout;
