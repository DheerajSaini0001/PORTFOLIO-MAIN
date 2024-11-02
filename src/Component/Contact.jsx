import './Contact.css'
function Emailsend()
{
    return (
<>

  <div className="contactcontainer">
<form action="https://api.web3forms.com/submit" method="POST">

    <h1>Contact or Query Section:-</h1>
  <input type="hidden" name="access_key" defaultValue="2ead3cdb-aafd-4bea-9805-7a1075a4ab88" />
  <div class="question">
    <input type="text" name='Full Name -' required />
  <label class="input-group__label" for="myInput">Full Name</label>
    
  </div>
  <div class="question">
    <input type="email" name='Email Address' required />
  <label class="input-group__label" for="myInput">Email Address</label>
  </div>
  <div class="question">
    <input type="text" name='Query -' required />
    <label>Query</label>
  </div>
<input
type="checkbox"
name="botcheck"
className=" hidden "
style={{ display: "none" }}
/>
<br />
<button type="submit" className= "button-33">Send</button>

</form>
</div>
  

</>
    )
}
export default Emailsend