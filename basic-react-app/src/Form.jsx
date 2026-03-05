
function handelSubmit( event ){
    event.preventDefault();
    console.log("form is submited");
}

export default function From(){
    return (
        <form onSubmit={handelSubmit}>
            <input placeholder="write some thing"/>
            <button>submit</button>
        </form>
    );
}