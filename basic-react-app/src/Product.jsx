import "./Product.css";
import Price from './Price.jsx'

function Product({title,idx}) {
  let oldprice=["12,495","11,900","1,599","599"];
  let newprice=["8,999","9,199","899","278"];
  let description=[
    ["8,000 DPI","5 Programmable buttons"],
    ["intuitive surface","designed for iPad pro"], 
    ["designed for iPad pro","intuitive surface"],
    ["Wireless","optical orientation"]]

  return (
    <div className="Product" >
      <h4>{title}</h4>

      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      {/* <h1>{idx}</h1> */}
      <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>

    </div>
  );
}

export default Product;
