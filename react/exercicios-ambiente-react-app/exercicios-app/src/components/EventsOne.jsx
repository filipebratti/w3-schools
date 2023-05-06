function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick={shoot}>Take a shot!</button>
    )
}

export default Football;