import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import { useState } from "react";

export default function Chat() {

  const [text, setText] = useState("");

  const sendMessage = () => {
    const value = text.trim();
    if (!value) return;

    onSend(value); // отправляем наверх
    setText("");   // очищаем input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
    
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

 
                    <div className="chat_left">
                        <div className="top_usr">
                            <div className="inf_us">
                      <div className="us_im">
                        <img src="./img/nkt.svg" alt="" />
                      </div>

                          <div className="pix">
                            <p className="txt45">
                            Никита Евреев
                          </p>

                          <p className="online">
                            Онлайн
                          </p>
                          </div>
                        </div>
                        </div>


                         <div className="chat-input">
      <button className="attach-btn">📎</button>

      <input
        className="message-input"
        type="text"
        placeholder="Введите ваше сообщение"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="send-btn" onClick={sendMessage}>
        Отправить
      </button>
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