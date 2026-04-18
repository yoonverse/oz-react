const Greeting = () => {
    const name = "hee"
    return (
      <div>
        <h1>Hello, {name}!</h1>
      </div>
    )
  }
  
const Button = () => {
return <button>Click me</button>
}

const MainPage = () => {
return (
        <>
            <Greeting />
            <Button />
        </>
    )
}

export default MainPage