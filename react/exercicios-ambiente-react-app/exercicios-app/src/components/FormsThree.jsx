import { useState } from 'react';

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
        localStorage.setItem("nome", name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter your name: <br />
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label> <br />
            <input type="submit" />
        </form>
    )
}

export default MyForm;