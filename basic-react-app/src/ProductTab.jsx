import Product from "./Product";

function ProductTab() {
       let style={
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center"       
        
      }

  return (
    <div style={style}>
      <Product title="Logitech MX Master 3S" idx={0}/>
      <Product title="Apple Pencile(2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-Transformer" idx={2}/>
      <Product title="Portronics Toad 23 " idx={3}/>
    </div>
    


  ); 
}

export default ProductTab;
