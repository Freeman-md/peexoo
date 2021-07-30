import { reactive } from 'vue'

export const useImages = () => {
  const images = reactive([
      {
          src: '/images/foods/1.jpg',
          srcSet: '/images/foods/1.jpg',
          description: 'Sunken dreams II. by Arbebuk',
      },
      {
          src: '/images/foods/2.jpg',
          srcSet: '/images/foods/2.jpg',
          description: 'Tunnel View Sunrise by Porbital',
      }
  ])

  return {
    images
  }
}