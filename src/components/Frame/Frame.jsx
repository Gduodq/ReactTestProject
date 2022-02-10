import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  frame: (props) => ({
    margin: props.margin,
    padding: props.padding,
    backgroundColor: theme.mpui[props.backgroundColor],
    border: props.borderColor ? `1px solid ${theme.mpui[props.borderColor]}` : null,
    borderRadius: props.borderRadius,
    display: props.flex ? 'flex' : null,
    flexDirection: props.column ? 'column' : null,
    flexWrap: props.wrap ? 'wrap' : null,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    width: props.width,
    maxWidth: props.maxWidth,
    minHeight: props.minHeight,
    height: props.height,
    boxSizing: props.borderBox ? 'border-box' : null,
    overflow: props.overflow,
    gap: props.gap,
    color: theme.mpui[props.color],
  }),
  clickable: {
    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(90%)',
    },
  },
}))

export const Frame = (props) => {
  const classes = useStyles(props)
  return (
    <div
      onClick={props.onClick}
      className={classNames(props.className, classes.frame, { [classes.clickable]: props.onClick })}
    >
      {props.children}
    </div>
  )
}

Frame.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
  flex: PropTypes.bool,
  column: PropTypes.bool,
  wrap: PropTypes.bool,
  borderBox: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  gap: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
