import ReactDOM from 'react-dom'
import './Whoiam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Whoiam(){
    return(
        <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    type="text/tailwindcss"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t\t@layer base {\n\t\t\t\t:root {\n\t\t\t\t\t--background: 0 0% 100%;\n--foreground: 240 10% 3.9%;\n--card: 0 0% 100%;\n--card-foreground: 240 10% 3.9%;\n--popover: 0 0% 100%;\n--popover-foreground: 240 10% 3.9%;\n--primary: 240 5.9% 10%;\n--primary-foreground: 0 0% 98%;\n--secondary: 240 4.8% 95.9%;\n--secondary-foreground: 240 5.9% 10%;\n--muted: 240 4.8% 95.9%;\n--muted-foreground: 240 3.8% 46.1%;\n--accent: 240 4.8% 95.9%;\n--accent-foreground: 240 5.9% 10%;\n--destructive: 0 84.2% 60.2%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 5.9% 90%;\n--input: 240 5.9% 90%;\n--ring: 240 5.9% 10%;\n--radius: 0.5rem;\n\t\t\t\t}\n\t\t\t\t.dark {\n\t\t\t\t\t--background: 240 10% 3.9%;\n--foreground: 0 0% 98%;\n--card: 240 10% 3.9%;\n--card-foreground: 0 0% 98%;\n--popover: 240 10% 3.9%;\n--popover-foreground: 0 0% 98%;\n--primary: 0 0% 98%;\n--primary-foreground: 240 5.9% 10%;\n--secondary: 240 3.7% 15.9%;\n--secondary-foreground: 0 0% 98%;\n--muted: 240 3.7% 15.9%;\n--muted-foreground: 240 5% 64.9%;\n--accent: 240 3.7% 15.9%;\n--accent-foreground: 0 0% 98%;\n--destructive: 0 62.8% 30.6%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 3.7% 15.9%;\n--input: 240 3.7% 15.9%;\n--ring: 240 4.9% 83.9%;\n\t\t\t\t}\n\t\t\t}\n\t\t"
    }}
  />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"  />
  <div className="bg-gray-900 flex flex-col items-center justify-center bg-background p-4 md:p-8 text-center">
    <div className="flex space-x-4 p-4 ">
    <a href="#" class="Socialfb "><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="Sociallinkedin "><i class="fa-brands fa-linkedin"></i></a>
    <a href="#" class="Socialinstagram "><i class="fa-brands fa-instagram"></i></a>
    <a href="#" class="Socialtwitter "><i class="fa-brands fa-twitter"></i></a>
    </div>
<div className='mt-14'>

<div className=''><h1 className="hello  text-2xl font-extrabold ">
      Hello, I am Dheeraj Saini
    </h1>
    <p className="role text-lg mb-3 ">Front end Designer | Developer</p>
    <a href="#" className="button-33 "><i class="fa-solid fa-print"></i> Print Resume</a></div>
 
</div>
  </div>
</>

        </>
    )
}
export default Whoiam