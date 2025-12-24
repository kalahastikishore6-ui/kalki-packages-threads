export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'bags' | 'thread';
  image: string;
  features: string[];
}

export const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'PP Woven Bags',
    description: 'High-quality polypropylene woven bags for agriculture, cement, and industrial packaging.',
    category: 'bags',
    image: '/bags',
    features: ['UV Resistant', 'High Tensile Strength', 'Custom Printing Available', 'Various Sizes'],
  },
  {
    id: '2',
    name: 'HDPE Woven Sacks',
    description: 'Durable HDPE woven sacks ideal for grains, fertilizers, and chemical packaging.',
    category: 'bags',
    image: '/bags',
    features: ['Moisture Resistant', 'Eco-Friendly', 'Reusable', 'Bulk Orders Available'],
  },
  {
    id: '3',
    name: 'Laminated Bags',
    description: 'Premium laminated woven bags with enhanced printing and moisture barrier.',
    category: 'bags',
    image: '/bags',
    features: ['Water Proof', 'Vibrant Printing', 'Food Grade Options', 'Custom Branding'],
  },
  {
    id: '4',
    name: 'Mouth Stitching Thread',
    description: 'Premium quality stitching thread for bag closure, available in multiple colors.',
    category: 'thread',
    image: '/thread',
    features: ['High Strength', 'Color Fast', 'Smooth Finish', 'Multiple Deniers'],
  },
  {
    id: '5',
    name: 'Industrial Sewing Thread',
    description: 'Heavy-duty industrial thread for packaging and manufacturing applications.',
    category: 'thread',
    image: '/thread',
    features: ['Abrasion Resistant', 'Consistent Tension', 'Low Lint', 'Bulk Spools'],
  },
  {
    id: '6',
    name: 'Multifilament Thread',
    description: 'Smooth multifilament thread for high-speed sewing machines and premium packaging.',
    category: 'thread',
    image: '/thread',
    features: ['High Speed Compatible', 'Excellent Seam Strength', 'Various Colors', 'Export Quality'],
  },
];
