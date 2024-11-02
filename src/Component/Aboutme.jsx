function Aboutme()
{
    return(
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
  <div className="flex flex-col items-center min-h-screen bg-background dark:bg-black">
    <div className="bg-card dark:bg-card rounded-lg shadow-lg p-6 max-w-3xl md:flex">
      <div className="md:w-1/2 md:mr-6">
        <h1 className="text-3xl font-bold text-primary dark:text-primary-foreground text-center">
          Hello It's Me
        </h1>
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-foreground text-center">
          Sem Johan
        </h2>
        <p className="text-lg text-muted-foreground dark:text-muted-foreground text-center">
          And I'm a UX
        </p>
        <p className="mt-2 text-muted-foreground dark:text-muted-foreground text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere
          eros justo, sed hendrerit lacus molestie id. In varius risus eget
          lacus laoreet placerat.
        </p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-primary hover:text-primary/80 mr-4">
            <img
              aria-hidden="true"
              alt="Twitter"
              src="https://openui.fly.dev/openui/twitter.svg?text=🐦"
            />
          </a>
          <a href="#" className="text-primary hover:text-primary/80 mr-4">
            <img
              aria-hidden="true"
              alt="Facebook"
              src="https://openui.fly.dev/openui/facebook.svg?text=📘"
            />
          </a>
          <a href="#" className="text-primary hover:text-primary/80">
            <img
              aria-hidden="true"
              alt="Instagram"
              src="https://openui.fly.dev/openui/instagram.svg?text=📸"
            />
          </a>
        </div>
        <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded w-full">
          Download CV
        </button>
      </div>
      <div className="md:w-full md:flex md:justify-center md:ml-6 md:mt-6">
        <img
          aria-hidden="true"
          alt="User Image"
          src="https://openui.fly.dev/openui/300x300.svg?text=👤"
          className="rounded-full border-4 border-white"
        />
      </div>
    </div>
  </div>
</>

    )
}
export default Aboutme;