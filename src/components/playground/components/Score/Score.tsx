import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/TypographyHeader"
import TypographyText from "../../../UI/TypographyText"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnSuccess}
          label={
            <>
              Errors:{" "}
              <span className={styles.counter}>{state.totalUnSuccessful}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipSuccessful}
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>
    </>
  )
}

export default Score
