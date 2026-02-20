import Footer from "@/widjets/footer";
import Header from "@/widjets/header";

export default function Chat() {
    return(
        <>
        <section>
            <div className="container">
                <Header/>

                <div className="chat_block">
                  
                  <div className="usr_chat">
                    <div className="srcp">
                     <div className="up">
                        <img src="./img/sr.svg" alt="" />
                     </div>
                    </div>

                     <div className="srcp">
                     <div className="up">
                        <img src="./img/sr.svg" alt="" />
                     </div>
                    </div>




                     <div className="srcp">
                     <div className="up">
                        <img src="./img/sr.svg" alt="" />
                     </div>
                    </div>

                     <div className="srcp">
                     <div className="up">
                        <img src="./img/sr.svg" alt="" />
                     </div>
                    </div>

                     <div className="srcp">
                     <div className="up">
                        <img src="./img/sr.svg" alt="" />
                     </div>
                    </div>
                  </div>

                </div>
            </div>
        </section>

        <section>
            <Footer/>
        </section>
        </>
    )
}