import Header from "@/widjets/header";
import Link from "next/link";

export default function Login() {
    return(
        <section>
            <div className="container">
                <Header/>

                <div className="login_block">
                    <div className="lgn_right">
                     
                     <Link href="/">
                     <img src="" alt="" />
                     </Link>
                    </div>
                  


                     <div className="lgn_left">
                        <img src="./img/l.svg" alt="" />
                     </div>
                </div>
            </div>
        </section>
    )
}