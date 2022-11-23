import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineArrowRight } from "react-icons/ai"
import { MdLanguage } from "react-icons/md"
import { useForm } from "react-hook-form"
import { IUser } from "./type";
import { useEffect, useState } from 'react';
import Input from "../../components/Input";
import Logo from "../../assets/logo.png"
import * as yup from "yup";
import "./style.css"

const Login = () => {
    const [user, setUser] = useState({Username: "", Password:""})
    const schema = yup.object().shape({
        Username: yup.string().min(5, "O usuário precisa ter no mínimo 5").required(),
        Password: yup.string().min(5, "A senha precisa ter no mínimo 5").required(),
    }).required();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<any>({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });
    const onSubmit = (data: IUser) => setUser(data)
    useEffect(() => {
        console.log(user)
        let login = {
            user: "matias",
            password: "12345"
        }
        if (user.Username === login.user && user.Password === login.password) {
            alert("LOGADO COM SUCESSO")
        }
    }, [user])
    return (
        <main>
            <div className="leftSide">
                <div className="header">
                    <img src={Logo} alt="Logo" />
                    <span>EUW(EU) <MdLanguage /></span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="formLeft">
                    <h1>SIGN IN</h1>
                    <Input control={control} msgError={errors?.Username?.message} type="text" name="Username" />
                    <Input control={control} msgError={errors?.Password?.message} type="password" name="Password" />
                    <div className="staySigned">
                        <label htmlFor="remember">
                            <input type="checkbox" name="remember" id="remember" />
                            <span>STAY SIGNED IN</span>
                        </label>
                    </div>
                    <div className="btn-div">
                        <button className="login" disabled={!isValid}><AiOutlineArrowRight /></button>
                    </div>
                </form>
                <div className="menuBottom">
                    <a href="#">Create accout</a>
                    <a href="#">Can't sign in?</a>
                </div>
            </div>
            <div className="BannerRight">
            </div>
        </main>
    )
}
export default Login;
