import { useState } from 'react';

function MyForm() {
    const [name, setName] = useState("");

    return (
        <form action="">
            <label htmlFor="">Enter your name: <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
        </form>
    )
}

export default MyForm;