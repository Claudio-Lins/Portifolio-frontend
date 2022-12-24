import imageUrlBuilder from '@sanity/image-url'
import client from 'src/sanity'

const useSanityImage = () => {
  const builder = imageUrlBuilder(client)

  const urlFor = (source) => {
    return builder.image(source)
  }
  return urlFor
}

export default useSanityImage