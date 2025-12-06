import type { NavLink } from '../types';

export const navLinks: NavLink[] = [
  {
    label: 'About Company',
    dropdown: [
      { label: 'KEICO PLUS', href: '/about/keico-plus' },
      { label: 'Values', href: '/about/values' },
      { label: 'Executive Intro', href: '/about/executive-intro' },
      { label: 'History', href: '/about/history' }
    ]
  },
  { label: 'Service & Solution', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' }
];
