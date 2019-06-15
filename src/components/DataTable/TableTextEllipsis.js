import React from 'react'
import Typography from '@material-ui/core/Typography'

const
  widthOffset = 900,
  minWidth = 100,
  maxWidth = 650,
  screenWidthLimit = 1500

function calcWidth() {
  const screenWidth = window.innerWidth
  let w = screenWidth - widthOffset
  if (screenWidth >= screenWidthLimit) {
    w = maxWidth
  } else if (w <= minWidth) {
    w = minWidth
  }
  return w
}

function useWidth() {
  const [width, setWidth] = React.useState(calcWidth())

  React.useEffect(() => {
    function handler() {
      setWidth(calcWidth())
    }

    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  })

  return width
}

function TableTextEllipsis({ text }) {
  const width = useWidth()
  return <Typography
    style={{ width }}
    noWrap={true}
    variant="body2">{text}</Typography>
}

export default TableTextEllipsis