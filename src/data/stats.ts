import type { Stat } from '../types';

export const stats: Stat[] = [
  {
    id: 1,
    value: 40,
    suffix: '%+',
    label: 'Energy Saved',
    icon: 'TrendingDown'
  },
  {
    id: 2,
    value: 10000,
    suffix: '+',
    label: 'Devices Connected',
    icon: 'Cpu'
  },
  {
    id: 3,
    value: 500,
    suffix: '+',
    label: 'Active Clients',
    icon: 'Users'
  },
  {
    id: 4,
    value: 1000,
    suffix: '+ tons',
    label: 'CO2 Reduced',
    icon: 'Leaf'
  }
];
