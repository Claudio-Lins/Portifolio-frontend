import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-12-19',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

export default client