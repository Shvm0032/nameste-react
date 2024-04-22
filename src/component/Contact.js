
const Contact = () => {
  return(
      <div>
          <h1 className="font-bold text-3xl text-center p-2 items-center">Contact Us</h1>
          <form className="w-[400px] h-[300px] border border-solid border-black p-5 ml-5 text-center">
            <input className="border border-black px-2  my-4" type="text" placeholder="Name"/><br/>
            <input className="border border-black px-2 my-4"  placeholder="Number"/><br/>
            <input className="border border-black px-2 my-4" type="text" placeholder="Message"/><br/>
            <button className="border border-solid border-blue-500 bg-blue-400 text-white px-2 rounded-lg">Submit</button>
          </form>
      </div>
  )
}

export default Contact;