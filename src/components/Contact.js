const Contact = () => {
    return (
        <div>
            <h1><b>Contact Us</b></h1>
            <form>
                <div className="grid grid-cols-2 gap-1">
                    <div>
                        <label>Email Id</label>
                        <input className="border border-black w-60 m-2 p-2 rounded-lg" type="text"></input>
                        <label>Description</label>
                        <input className="border border-black w-60 m-2 p-2 rounded-lg" type="text"></input>
                        <button className="border border-black w-24 rounded-lg">Submit</button>
                    </div>
                    <div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;