import { ILogin } from "./type"
import { Controller } from "react-hook-form";
import "./style.css"
const Input = ({ msgError, control, name, ...rest }: ILogin) => {
    return (
        <div className="inputContainer">
            <div className="input">
                <Controller
                    render={({ field, }) => <input {...field} {...rest} placeholder={name} />}
                    name={name}
                    control={control}
                    defaultValue=""
                />
            </div>
            {msgError ? <span className="msgError">{msgError}</span> : null}
        </div>
    )
}
export default Input;