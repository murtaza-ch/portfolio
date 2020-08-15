import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import {Button} from 'reactstrap'
import moment from "moment";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: new Date(),
      isHidden: false,
    };
  }

  setFieldValueAndTouched = (date, touched) =>{
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange = (date) => {

    this.setState({
      dateValue: date,
    });
    this.setFieldValueAndTouched(date, true);
  };

  toggleDate = (date) => {

    this.setState({
      isHidden: !this.state.isHidden,
    });

    this.setFieldValueAndTouched(date, true);
  };

  render() {
    const {
      canBeDisabled,
      label,
      field,
      form: { touched, errors },
    } = this.props;
    const { isHidden, dateValue } = this.state;

    return (
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          { !isHidden && 
            <DatePicker
              selected={dateValue}
              onChange={this.handleChange}
              peekNextMounth
              showMonthDropdown
              showYearDropdown
              maxDate={moment()}
              dropdownMode="select"
            />
          }
        </div>

          {canBeDisabled && !isHidden && ( <Button onClick={() => this.toggleDate(null)}>Currently Working</Button>)}

          { canBeDisabled && isHidden && 
             <React.Fragment>
              <span>Currently Working</span>
              <Button onClick={() => this.toggleDate(dateValue)}>Set End Date</Button>
             </React.Fragment>
          }
          {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
          )}
      </FormGroup>
    );
  }
}
