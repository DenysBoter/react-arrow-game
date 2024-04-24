import stylesCommon from "../../../RandomKeys.module.css"
import styles from "./WelcomeText.module.css"
import loader from "./img/loader.svg"
import TypographyText from "../../../../../../UI/TypographyText"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loading..." />
        </span>
      </div>
    )
  }
  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomeText
