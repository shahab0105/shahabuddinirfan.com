import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: '2ctcdpil',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: false,
});