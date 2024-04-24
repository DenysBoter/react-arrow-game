import cn from "classnames"
import styles from "./TypographyText.module.css"
import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"
export interface ITypographyTextProps extends MaterialTypographyProps {
  //
}

const TypographyHeader: React.FC<ITypographyTextProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography {...props} className={cn(styles.text, className)} />
  )
}

export default TypographyHeader
