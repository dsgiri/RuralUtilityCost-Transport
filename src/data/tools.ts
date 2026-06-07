import { Tool } from '../types';

export const CATEGORIES = [
  'Hauling cost',
  'Mileage / trip planning',
  'Fuel use',
  'Delivery planning',
  'Route cost',
  'Load planning',
  'Empty-mile reduction'
];

export const TOOLS: Tool[] = [
  {
    id: 'hauling-cost',
    title: 'Hauling Cost Calculator',
    description: 'Estimate the total cost of hauling materials, grain, or livestock per trip.',
    category: 'Hauling cost',
    outcome: 'Total trip cost estimate',
    path: '/tools/hauling-cost',
    featured: true
  },
  {
    id: 'mileage-cost',
    title: 'Mileage Cost Estimator',
    description: 'Calculate the true cost per mile driven considering fuel, maintenance, and wear.',
    category: 'Mileage / trip planning',
    outcome: 'Cost per mile analysis',
    path: '/tools/mileage-cost',
    featured: true
  },
  {
    id: 'fuel-use',
    title: 'Fuel Use Calculator',
    description: 'Estimate total fuel required and cost for a specific agricultural transport operation.',
    category: 'Fuel use',
    outcome: 'Fuel volume and cost',
    path: '/tools/fuel-use'
  },
  {
    id: 'delivery-route',
    title: 'Delivery Route Planner',
    description: 'Optimize your drop-offs to reduce turnaround time and total mileage.',
    category: 'Delivery planning',
    outcome: 'Optimized delivery sequence',
    path: '/tools/delivery-route',
    featured: true
  },
  {
    id: 'route-cost-compare',
    title: 'Route Cost Comparison Tool',
    description: 'Compare multiple potential routes to determine the most cost-effective path.',
    category: 'Route cost',
    outcome: 'Lowest-cost route recommendation',
    path: '/tools/route-cost-compare'
  },
  {
    id: 'load-planning',
    title: 'Load Planning Estimator',
    description: 'Maximize payload efficiency without exceeding weight limits or fuel targets.',
    category: 'Load planning',
    outcome: 'Optimal payload distribution',
    path: '/tools/load-planning'
  },
  {
    id: 'empty-miles',
    title: 'Empty Miles Reduction Planner',
    description: 'Strategize backhauls and return trips to minimize unprofitable empty miles.',
    category: 'Empty-mile reduction',
    outcome: 'Reduced deadhead mileage',
    path: '/tools/empty-miles'
  },
  {
    id: 'grain-feed-delivery',
    title: 'Grain / Feed Delivery Cost Calculator',
    description: 'Specialized estimator for bulk agricultural commodity deliveries.',
    category: 'Hauling cost',
    outcome: 'Per-bushel or per-ton delivery cost',
    path: '/tools/grain-feed-delivery',
    featured: true
  }
];
