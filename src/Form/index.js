import React from 'react';

export default (props) => {

    const [formData, setFormData] = React.useState(props.initial)

    React.useEffect(() =>{
        setFormData(props.initial);
    }, [props.initial]);


    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <div class="row">
                <form class="col s5">
                    <div class="row">
                        <div class="form">
                            <input 
                            className='input-text'
                            type="text"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}>
                            </input>

                            <input 
                            className='input-text'
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            placeholder="Full Name"
                            onChange={handleChange}>
                            </input>

                            <textarea
                            className='input'
                            rows="4" cols="50" 
                            type="text"
                            name="message"
                            value={formData.message}
                            placeholder="Enter Message here..."
                            onChange={handleChange}>
                            </textarea>

                            <button
                            onClick={() => {
                            props.handleSubmit(formData);
                            setFormData(props.initial);
                            }}>
                            Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}