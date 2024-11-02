import ReactDOM from 'react-dom'
import './Whoiam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Whoiam()
{
    return(
        <div class="flex flex-col items-start justify-center h-screen bg-background text-foreground">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"  />
  <div class="flex space-x-4 mb-4 ml-4">
    <a href="#" class="Social "><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="Social "><i class="fa-brands fa-linkedin"></i></a>
    <a href="#" class="Social "><i class="fa-brands fa-instagram"></i></a>
    <a href="#" class="Social "><i class="fa-brands fa-twitter"></i></a>
   
  </div>
  <h1 class="hello text-3xl font-bold ">Hello, I am Dheeraj Saini</h1>
  <p class=" role text-lg mt-2 ml-4">Front end Designer | Developer</p>
  <a href="#" class="button-33">Print Resume</a>
</div>
    )
}
export default Whoiam