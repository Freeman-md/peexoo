import { gsap } from 'gsap'

export const useImages = (ctx, profileCard) => {
  const calculateSize = (index) => {
    if (index > 3) {
      if (index <= 5 || (index % 3 === 0 && index !== 6)) {
        return 'row-span-2'
      }
    } else {
      return !profileCard ? 'lg:w-72 h-56' : 'h-56'
    }
  }

  const setActiveImage = (image) => {
    ctx.emit('setActiveImage', {image})
  }

  const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = "scale(1)";
  }

  const enter = (el, done) => {
    gsap.to(el, {
      opacity: 1,
      duration: 0.8,
      onComplete: done,
      delay: el.dataset.index * 0.5
    })
  }

  return {
    calculateSize, setActiveImage, beforeEnter, enter
  }
}