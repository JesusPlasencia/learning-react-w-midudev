import { useState, useEffect, useRef } from 'react'

export function useDynamicSvgImport (iconName) {
  const importedIconRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState()

  useEffect(() => {
    setIsLoading(true)
    // dynamically import the mentioned svg icon name in props
    const importSvgIcon = async () => {
      // make sure all svg icons are placed in the same directory
      try {
        importedIconRef.current = (
          await import(`./../assets/icons/${iconName}.svg`)
        ).ReactComponent
      } catch (err) {
        setHasError(err)
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    importSvgIcon()
  }, [iconName])

  return { hasError, isLoading, SvgIcon: importedIconRef.current }
}
