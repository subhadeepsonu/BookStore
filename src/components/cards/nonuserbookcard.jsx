export default function NonUserBookCard(props){
    return <div className="w-80 h-80  flex flex-col border-2 border-gray-300 rounded-lg">
        <div className="w-80 h-60">
        <img className="w-80 h-60 object-cover rounded-t-lg" src={props.imgurl} alt="image">
        </img>
        </div>
        <div className=" font-semibold w-80 h-20 flex flex-col justify-around items-start pl-2">
        <p >
        Name: {props.name}
        </p>
        <p>
            Author: {props.author}
        </p>
        </div>
    </div>
}