const Shimmer=()=>{
    return(
        <div className="multiple">
           {Array(20).fill().map(e=><div className="shimmer-card"></div>)} 
        </div>
    )
}


export default Shimmer;