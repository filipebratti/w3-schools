import { useState } from 'react';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter your name: <br />
                <input 
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label> <br />
            <label htmlFor=''>Enter your age: <br />
                <input 
                    type="number" 
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label> <br />
            <input type="submit" />
        </form>
    )
}

export default MyForm;