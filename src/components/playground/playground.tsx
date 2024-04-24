import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./playground.module.css"
import { useState, useEffect, useRef } from "react"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import Controls from "./components/controls/Controls"
import { INTERVAL_TIME, END_GAME_CONDITIONS } from "./constants"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/RandomKeys/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const [isSuccessEndGame, setisSuccessEndGame] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      // FIX AFTER RELEASE ({VERY IMPORTANT})
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAME_CONDITIONS.SUCCESS_COUNT
    const isUnSuccessful =
      state.totalUnSuccessful === END_GAME_CONDITIONS.UNSUCCESS_COUNT
    isSuccessful && setisSuccessEndGame(true)
    isUnSuccessful && setisSuccessEndGame(false)

    if (isSuccessful || isUnSuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccessful, state.totalUnSuccessful])
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}
export default Playground
