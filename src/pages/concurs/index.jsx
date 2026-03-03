import Footer from "@/widjets/footer";
import Header from "@/widjets/header";

export default function Concurs() {
    return(
       <>
        <section>
            <div className="container">
                <Header/>

                <div className="concurs_block">
                    <div className="concurs_left">
                     <div className="top_cn1">
                           <p className="txt55">
                             Нужно сделать рекламный баннер
                            </p>  

                            <p className="txt56">100 000 тенге</p>
                        </div>

                     <div className="top_cn2">
                         <p className="txt57">Дизайн баннеров</p>

                         <p className="txt58">до 14.07.2021</p>
                     </div>

                     <p className="txt59"><span className="spm">Название компании / частное лицо:</span> McDonalds</p>
                     <p className="txt59"><span className="spm">Род деятельности компании:</span> Бургеры</p>
                     <p className="txt59"><span className="spm">Каналы распространения и география продаж:</span>  Респубика Казахстан, г. Алматы</p>
                     <p className="txt59"><span className="spm">Портрет целевой аудитории:</span>  от 6 до 20 лет</p>            
                     <p className="txt59">
                        <span className="spm">Опишите основные конкуретные преимущества компании / обьекта / услуги:</span> <br/>
                     BurgerKing, KFC, JekasDoner
                     </p>

                      <p className="txt59">
                        Дизайн страницы какой социальной сети необходимо разработать:
                    </p>

                    <ul>
                        <li>Facebook</li>
                        <li>Вконтакте</li>
                        <li>Instagram</li>
                    </ul>  

                    <p className="txt59">
                        Адрес сайта и целевой страницы:
                    </p>

                    <p>
                         https://www.instagram.com/mcdonalds.kaz/
                    </p>   
                     <p>
                         https://vk.com/mcdonalds_kazakhstan
                    </p>  
                    <p>https://www.facebook.com/mcd.kazakhstan/</p>      
                      

                      <p className="txt59">Цель создания страницы: (лишние пункты удалите)</p>
                      <ul>
                        <li>имидж</li>
                        <li>продажа продукта</li>
                        <li>информирование</li>
                        <li>привлечение трафика на сайт</li>
                      </ul>

                      <p className="txt59">Какое должно быть название страницы? </p>
                       <p>McDonalds</p>

                       <p className="txt59">Есть ли логотип компании?</p>
                        <p>да</p>

                          <p className="txt59">
                            Есть ли слоган компании?  
                          </p>

                          <p>
                            Хэппи Мил - это коробка, которая порадует маленьких гостей ресторанов <br />
                             McDonald’s во всем мире!
                          </p>


                          <p className="txt59">
                            Есть ли фирменный стиль компании?  
                          </p>
                          <p>да</p>

                          <p className="txt59">
                            Какой стиль страницы является предпочтительным: 
                          </p>
                          <ul>
                            <li>открытый к общению</li>
                            <li>игривый</li>
                            <li>собеседник друг</li>
                          </ul>

                          <p className="txt59">
                            Какую информацию вы хотите размещать на странице?  
                          </p>
                          <p>Реклама продукта</p>

                          <button className="btn13">
                           Участвовать в конкурсе
                          </button>
                  </div>


                    <div className="concurs_right">
                       <div className="top_inf">
                        <div className="usr">
                            <img src="./img/profile.png" alt="" />
                        </div>

                        <div className="usr_left">
                            <p className="txt60">Екатерина Иванова</p>

                            <p className="txt61">Размещено проектов на бирже: 25</p>

                            <div className="review_block">
                                <div className="strq">
                                    <img src="./img/star.svg" alt="" />
                                </div>
                                <p className="txt62">15 отзывов</p>
                            </div>
                        </div>
                       </div>


                    </div>
                </div>

            </div>
        </section>

        <section>
            <div className="container">
                <Footer/>
            </div>
        </section>
       </>
    )
}