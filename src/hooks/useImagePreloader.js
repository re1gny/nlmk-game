import { useEffect, useState } from 'react'

function preloadImage (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
      resolve(img)
    }
    img.onerror = img.onabort = function() {
      reject(src)
    }
    img.src = src
  })
}

export function useImagePreloader(images) {
  const [preloaded, setPreloaded] = useState(false)

  useEffect(() => {
    let isCancelled = false

    async function preload() {
      if (isCancelled) {
        return
      }

      const imagesPromises = []
      for (const i of images) {
        imagesPromises.push(preloadImage(i))
      }

      await Promise.all(imagesPromises)

      if (isCancelled) {
        return
      }

      setPreloaded(true)
    }

    preload()

    return () => {
      isCancelled = true
    }
  }, [images])

  return { preloaded }
}