import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
export const Signin = () => {
    return (
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="h-screen flex justify-centre flex-col">
         <Auth type="signin"/>
        </div>
        <div className="invisble lg:visible"><Quote /></div>
        </div>
        </div>
    )
}