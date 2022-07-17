function EyesOnMe() {

    function letFocus(){
        console.log('Good!')
    }
    function blurry(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onFocus={letFocus} onBlur={blurry}>Eyes on me</button>
    )
}

export default EyesOnMe;