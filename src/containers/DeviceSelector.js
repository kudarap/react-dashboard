import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import NoSsr from '@material-ui/core/NoSsr'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'

import { settings } from '../actions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}))

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

function Control(props) {
  return (
    <TextField
      label="Device"
      InputLabelProps={{
        shrink: true,
      }}
      required
      margin="dense"
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.TextFieldProps} />
  )
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps} >
      {props.children}
    </MenuItem>
  )
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
}

function Menu(props) {
  return (
    <Paper className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  )
}

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
}

function DeviceSelector({ dispatch, devices, fetching, onChange }) {
  const classes = useStyles()
  const theme = useTheme()

  const [value, setValue] = React.useState(null)

  // Get devices from app settings on mount once.
  React.useEffect(() => {
    dispatch(settings.request())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleChange(target) {
    setValue(target)
    onChange(target.value)
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
    menuPortal: base => ({
      ...base, zIndex: 9999
    }),
  }

  // Format options
  const options = devices.map(({ id, label }) => ({
    value: id,
    label: label,
  }))

  // Todo! Handle Error

  const placeholder = fetching ? "Loading..." : "Please select"

  return <div className={classes.root}>
    <NoSsr>
      <Select
        menuPortalTarget={document.body}
        classes={classes}
        styles={selectStyles}
        options={options}
        components={components}
        value={value}
        onChange={handleChange}
        placeholder={placeholder} />
    </NoSsr>
  </div>
}

DeviceSelector.propTypes = {
  // Injected props by react-redux.
  dispatch: PropTypes.func.isRequired,
  // Settings reducer.
  devices: PropTypes.array,
  loading: PropTypes.bool,
  // Component props
  onChange: PropTypes.func,
}

const mapStateToProps = ({ settings }) => ({
  devices: settings.devices,
  fetching: settings.fetching,
  error: settings.error,
})

export default connect(mapStateToProps)(DeviceSelector)