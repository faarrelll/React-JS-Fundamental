import { Component } from "react";
import styles from "./WelcomeStyle.styles";
// perlu import CSS nya
import "./welcomeStyle.styles.css";
import WelcomeStyledComponent from "./WelcomeStyledComponent.styles";

export class WelcomeStyle extends Component {
  render() {
    // from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.
    // return <div style="background-color: red">WelcomeStyle</div>;
    return (
      <div>
        {/* {inline stylenya menggunakan style object bukan pakai string seperti di html style="background-color: red" */}
        <div
          style={{
            backgroundColor: "red",
            color: "white",
          }}
        >
          WelcomeStyle Inline
        </div>

        {/* styling dengan cara style object */}
        <div style={styles.secondWelcome}>WelcomeStyle Style Object</div>
        <div style={styles2.secondWelcome}>
          WelcomeStyle Style Object di dalam file yang sama
        </div>

        {/* styling dengan cara CSS Import dengan classNamenya*/}
        <div className="third-welcome">WelcomeStyle dengan CSS Import</div>

        {/* tambahan styling dengan cara styled component
        https://www.npmjs.com/package/styled-components*/}
        <WelcomeStyledComponent.PinkBg>
          WelcomeStyledComponent PinkBg
        </WelcomeStyledComponent.PinkBg>
        <WelcomeStyledComponent.CoralBg>
          WelcomeStyledComponent CoralBg
        </WelcomeStyledComponent.CoralBg>
      </div>
    );
  }
}

const styles2 = {
  secondWelcome: {
    backgroundColor: "green",
    color: "white",
  },
};

export default WelcomeStyle;
