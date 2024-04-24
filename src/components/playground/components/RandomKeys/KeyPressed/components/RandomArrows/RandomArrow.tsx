import cn from "classnames"
import stylesCommon from "../../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"
import { useAppSelector } from "../../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../../constants"
import type { IPlaygroundStepsState } from "../../../../../store/types"
import type { IMapArrowCodes } from "../../../../../types"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    return cn(
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnSuccess,
      stylesCommon.icon,
    )
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element) => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
