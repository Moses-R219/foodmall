const Shimmer=()=>{
    return(
        <div className="multiple">
           {Array(20).fill().map((e,index)=><div className="shimmer-card" key={index}></div>)} 
        </div>
    )
}


export default Shimmer;