import Link from 'next/link'
import style from './style.module.css'

export default function Register() {
    return(
        <section>
            <div className={style.container}>
                <div className={style.register_block}>
                 <div className={style.register_left}>
                    <div className={style.logos}>
                        <img src="./img/logo1.svg" alt="" />
                    </div>


                    <form>
                     <div className={style.register_frm}>
                      <div className={style.top}>
                         <p className={style.txt1s}>
                            Давайте создадим Вам аккаунт
                         </p>

                         <p className={style.txt2s}>
                         Заполните все поля
                         </p>
                      </div>

                         <div className={style.input_block}>
                           <div className={style.lm1}>
                              <span>Ваше имя</span>
                              <input type='text' name="" id="" placeholder='Имя'/>
                           </div>

                           <div className={style.lm1}>
                              <span>Ваше фамилия</span>
                              <input type='text' name="" id="" placeholder='фамилия'/>
                           </div>

                           <div className={style.lm1}>
                              <span>email</span>
                              <input type='email' name="" id="" placeholder='E-mail'/>
                           </div>

                           <div className={style.lm1}>
                              <span>Телефон номер</span>
                              <input type="tel" name="" id="" placeholder='Tелефон'/>
                           </div>

                           <div className={style.lm1}>
                              <span>Пароль</span>
                              <input type='password' name="" id="" placeholder='Пароль'/>
                           </div>

                           <div className={style.lm1}>
                              <span>Повторить пароль</span>
                              <input type='password' name="" id="" placeholder='Пароль'/>
                           </div>

                           <div className={style.check}>
                              <div className={style.left_check}>
                                 <input type="checkbox" name="" id="" className={style.ch} />
                                 <p className={style.txt1g}>Я исполнитель</p>
                              </div>

                              <div className={style.rght_check}>
                                  <input type="checkbox" name="" id="" className={style.ch} />
                                  <p className={style.txt1g}>Я заказчик</p>
                              </div>
                           </div>

                           <button className={style.btn_r}>
                            Зарегестрироваться
                           </button>

                           <div className={style.bottom1}>
                              <p>У Вас есть аккаунт?</p>
                              <Link href="#" className={style.lnk} >
                              Войдите
                              </Link>
                           </div>
                         </div>
                    </div>
                    </form>
                 </div>

                  <div className={style.register_img}>
                   <img src="./img/note.png" alt="" />
                  </div>
                </div>
            </div>
        </section>
    )
}