// import styles from "./RandomKeys.module.css"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/TypographyHeader"
import RandomArrows from "./KeyPressed/components/RandomArrows"
import WelcomeText from "./KeyPressed/components/WelcomeText"
export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const dispatch = useAppDispatch()
  const { isTimerActive } = props

  const state = useAppSelector((state) => state.playground)

  console.log(state.steps)
  return (
    <div>
      <TypographyHeader>Random Keys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
