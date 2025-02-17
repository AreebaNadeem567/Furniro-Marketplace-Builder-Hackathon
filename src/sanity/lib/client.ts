// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })










import { createClient } from '@sanity/client'



// Alias sanityClient to createClient
export const client = createClient({
  projectId: '33l5uu1d',  // Your Sanity Project ID
  dataset: 'production',   // Your dataset name
  token: 'skTRmBYHmSzUJsjJM7oppXjDVvUxONRlISggJZg7bTa4PmqD6xT5nBgyW7ZYFI7FGI35AWBAjZ1LMGu8L10Whfva6JvZcGwOppzqXn3kQdEVoTWkJCtDcMrLTOEenJpuxkVwaoY7y8BoBU26bxuehwSy7hUrzIlrxvmiH2dz40AyqqAWZJY7',
  useCdn: false,  // Turn off CDN for write operations
  apiVersion: '2023-01-27',  // Specify API version (you can change the date to the version you want)
});
