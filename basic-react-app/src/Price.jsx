function Price({oldprice,newprice}){
    
    let oldpricestyle={
        textDecorationLine :"line-through"
    }
     let newpricestyle={
        fontWeight:"bold"
    }

    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        width: "200px",
        
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"

    }
   return (
        <div style={styles}>
            <span style={oldpricestyle}>{oldprice}</span>
            &nbsp;
            &nbsp;
            &nbsp; 
            <span style={newpricestyle}>{newprice}</span>

        </div>
    );
}

export default Price;