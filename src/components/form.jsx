import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import NavigationIcon from "@material-ui/icons/Navigation";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import http from "./httpService";

import { async } from "q";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  margin: {
    margin: theme.spacing.unit
  }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class Form extends React.Component {
  state = {
    PropertyKey: "jcr:title",
    value: "chandra",
    path: "/content/AEMattra3/en/jcr:content/root/responsivegrid/title",
    baseUrl: "http://localhost:4502/bin/SlingServlet2?",
    formatUrl: "",
    response: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  Submit = async e => {
    let formatUrl = `${this.state.baseUrl}name=${
      this.state.PropertyKey
    }&value=${this.state.value}`;
    formatUrl = formatUrl + `&path=${this.state.path}`;
    this.setState({ formatUrl });
    //alert(formatUrl);
    // const { data: response } = await http.get(formatUrl);
    // this.setState({ response });
    // alert(formatUrl);

    window.location =
      "http://localhost:4502/bin/SlingServlet2?name=jcr:title&value=chandra&path=/content/AEMattra3/en/jcr:content/root/responsivegrid/title";
  };
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          fullWidth
          id="outlined-Path"
          label="Path"
          defaultValue="Hello World"
          value={this.state.path}
          className={classes.textField}
          onChange={this.handleChange("path")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          onClick={this.Submit}
          required
          id="outlined-PropertyKey"
          label="PropertyKey"
          className={classes.textField}
          value={this.state.PropertyKey}
          onChange={this.handleChange("PropertyKey")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          required
          id="outlined-Value"
          label="Value"
          defaultValue="foo"
          value={this.state.value}
          className={classes.textField}
          onChange={this.handleChange("value")}
          margin="normal"
          variant="outlined"
        />

        {/* <Button size="large" className={classes.margin}>
          Large
        </Button> */}
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={this.Submit}
        >
          Submit
        </Button>
        <br />

        <TextField
          //   disabled="true"
          id="filled-full-width"
          label="Url"
          style={{ margin: 8 }}
          placeholder="Url"
          //   helperText="Full width!"
          fullWidth
          value={this.state.formatUrl}
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
        />
        {/* <TextField
          //   disabled="true"
          id="filled-full-width"
          label="Response"
          style={{ margin: 8 }}
          placeholder="Response"
          //   helperText="Full width!"
          fullWidth
          value={this.state.response}
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true
          }}
        /> */}
        <TextField
          id="filled-textarea"
          label="Response"
          //   placeholder="Placeholder"
          multiline
          value={this.state.response}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />

        {/* <span>{this.state.formatUrl}</span> */}
        {/* <span>{this.state.response}</span> */}
        {/* <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="hello"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange("age")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange("currency")}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          variant="outlined"
        /> */}
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
