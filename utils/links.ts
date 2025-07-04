type NavLink = {
  href: string;
  label: string;
  icon: string;
};

const links: NavLink[] = [
  {
    href: '/add-job',
    label: 'add job',
    icon: 'Layers',
  },
  {
    href: '/jobs',
    label: 'all jobs',
    icon: 'AppWindow',
  },
  {
    href: '/stats',
    label: 'stats',
    icon: 'AreaChart',
  },
];

export default links;
