function handleClick(event){
    console.log("hello!");
    console.log(event)
}
function handleMouseOver(){
    console.log("buy!")
}
function handleDoubleClick(){
    console.log("button was double clicked")
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>click me!</button>
            <p onMouseOver={handleMouseOver}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Autem delectus tempora at facere sunt corporis pariatur quibusdam 
                 ad nemo doloribus illum magnam, illo iure architecto, hic sapiente
                  dignissimos eum magni.
            </p>
            <button onDoubleClick={handleDoubleClick}>double click me</button>
        </div>
    );
}