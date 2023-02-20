import { useDynamicSvgImport } from '../../hooks/useDynamicSvgImport'

const SvgIcon = (props) => {
  const { iconName, wrapperStyle, svgProp, handleClick } = props
  const { isLoading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <>
      {isLoading && (
        null
      )}
      {SvgIcon && (
        <div className={wrapperStyle} onClick={handleClick}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  )
}

export { SvgIcon }
