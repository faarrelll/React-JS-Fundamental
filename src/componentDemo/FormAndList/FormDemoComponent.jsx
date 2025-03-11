import React, { Component } from "react";

export class FormDemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };

    // React.createRef() itu untuk membuat ref (reference) untuk simpan data seperti state
    //  tapi jika berubah gak akan rerender
    this.addressInputRef = React.createRef();

    // constructor method binding
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  handlePasswordChange(e) {
    this?.setState({
      password: e?.target?.value || "",
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    console.log("DEBUG", {
      e,
      "this.addressInputRef.current.value": this.addressInputRef.current.value,
      "this.state.password": this.state.password,
    });
  }

  // https://legacy.reactjs.org/docs/uncontrolled-components.html#gatsby-focus-wrapper
  // In most cases, we recommend using controlled components to implement forms.
  // In a controlled component, form data is handled by a React component.
  // The alternative is uncontrolled components, where form data is handled by the DOM itself.

  // but we will use
  // React Hook Form https://react-hook-form.com/
  // or https://formik.org/docs/overview
  render() {
    console.log("this.state.password", this.state.password);
    console.log(
      "this.addressInputRef.current.value",
      this?.addressInputRef?.current?.value
    );

    // buat ref itu tujuan mirip access dom dibawah ini
    console.log(
      'document.getElementById("address_test").value',
      document.getElementById("address_test")?.value
    );

    return (
      <div>
        <form style={styles.container} onSubmit={this.onSubmitHandler}>
          {/* value atau state internal dari input terisi secara natural oleh HTML */}
          {/* TIDAK DIKONTROL OLEH REACT, maka dari dari itu dinamakan UNCONTROLLED COMPONENT */}
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />

          {/*    */}
          <label htmlFor="address">Address</label>
          {/* ref=  untuk memasukan reference ke component instance
          agar bisa mendapatkan nilai2 dari dom */}
          <input
            id="address_test"
            ref={this.addressInputRef}
            type="text"
            name="address"
          />

          {/* Nilai Form Di Kontrol Oleh State React, Dinamakan CONTROLLED COMPONENT */}
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            // render, method binding
            onChange={this.handlePasswordChange.bind(this)}
            value={this.state.password}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
};

export default FormDemoComponent;
