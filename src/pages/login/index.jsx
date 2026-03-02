import Header from "@/widjets/header";
import Link from "next/link";

export default function Login() {
    return(
        <section>
            <div className="container">
               

                <div className="login_block">
                     <div className="lgn_left">
                        <img src="./img/l.svg" alt="" />
                     </div>


                     <div className="lgn_right">
                        
                        <img src="./img/logo1.svg" alt="" className="lgop"/>
                       

                        <div className="form_login">
                           <div className="top_">
                             <p className="txt46">Добро пожаловать!</p>
                             <p className="txt47">Войдите в свой аккаунт</p>
                           </div>

                           <div className="input_block">
                            <div className="w_inp">
                                <span>email</span>
                                <input type="email" name="email" id="" />
                            </div>

                             <div className="w_inp">
                                <span>password</span>
                                <input type="password" name="пароль" id="" />
                            </div>

                            <div className="btmm">
                                 <div className="left_check">
                                    <input className="ch" type="checkbox" name="" id="" />
                                    <p className="txt48">Запомнить меня</p>
                                 </div>


                                 <Link href="/register" className="txt49" >
                                 Забыли пароль?
                                 </Link>
                            </div>



                            <div className="btn_block">
                                <button className="btn11">
                                   <Link href="#" className="lnk14" >
                                   войти
                                   </Link>
                                </button>

                                <button className="btn_google">
                                  <div className="googl">
                                    <img src="./img/goog.png" alt="" />
                                  </div>

                                   <Link href="#" className="lnk15" >
                                    Или войдите с помощю Google
                                   </Link>   
                                </button>
                            </div>


                            <div className="bottm">
                              <p>
                                У Вас все еще нет аккауна? 
                              </p>
                                <Link href="#" className="reg">
                                Зарегистрируйтесь бесплатно!
                                </Link>
                            </div>
                           </div>

                        </div>
                     </div>
                </div>
            </div>
        </section>
    )
}