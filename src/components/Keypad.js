// Code Keypad Component Here
function Keypad(){
    function keypad(event){
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={keypad} placeholder="Enter the password"/>)
}

export default Keypad