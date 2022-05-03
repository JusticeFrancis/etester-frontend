// assets
import { IconFiles, IconUserCheck } from '@tabler/icons';

// constant
// constant
const icons = {
    IconFiles,
    IconUserCheck
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const tutorial = {
    id: 'tutorials',
    title: 'Tutorials',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'materials',
            type: 'item',
            url: '/materials',
            icon: icons.IconFiles,
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'tutors(coming soon)',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconUserCheck,
            breadcrumbs: false
        }
    ]
};

export default tutorial;
