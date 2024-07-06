export default function OrderCard(props){
    return <div className="w-80 h-32 flex  rounded-lg border-2 border-gray-300">
        <div className="h-32 w-32  rounded-l-lg" >
        <img src={props.imgurl} alt="image" className="h-full w-full object-cover">
        </img>
        </div>
        <div className="h-32 w-48 flex flex-col justify-around items-start pl-2">
        <p>
            name: {props.name}
        </p>
        <p>
            ordered at: {props.orderedat}
        </p>
        </div>
    </div>
}