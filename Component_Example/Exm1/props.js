//props
import React, { Component } from "react";

class Prop extends Component {
  render() {
    //Destructing properties
    const { Name, Department, Company } = this.props;
    return (
      <div>
        <ul style={{ textAlign: "left" }}>
          <li>
            Name: {Name} <i class="far fa-trash-alt" />
          </li>
          <li>Department: {Department}</li>
          <li>Company: {Company}</li>
        </ul>
        {/*<ul style={{ textAlign: "left" }}>
          <li>Name: {this.props.Name}</li>
          <li>Departmant: {this.props.Department}</li>
          <li>Company: {this.props.Company}</li>
    </ul>*/}
      </div>
    );
  }
}
export default Prop;
