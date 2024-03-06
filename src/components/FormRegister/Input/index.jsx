import { forwardRef } from "react"
import style from "./style.module.scss"

export const Input = forwardRef(({label, error, ...rest}, ref) => {
    return (
        <div className={style.container}>
            <label >{label}</label>
            <input ref={ref} {...rest}/>
            {error ? <span className={style.err}>{error.message}</span> : null}
        </div>
    )
})