import Navbar from './Component/Navbar'
import Contact from './Component/Contact'
import Whoiam from './Component/Whoiam'
import Skillown from './Component/Skillown'
function Home(){
    return(
<>
<Navbar/>
<hr />
  <Whoiam/>
  <hr />
  <Skillown/> 
   <Contact/>
</>
    )
}
export default Home