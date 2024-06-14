const VideoCard=({info})=>{
    const {snippet,statistics}=info;
    const{channelTitle,thumbnails,title}=snippet;
    const{viewCount}=statistics;

    return (
    //    <div className="h-[300px] w-[345px]  shadow-lg my-3 mx-1" >
<div className="flex flex-col mb-8">
     <div className="rounded relative h-48 md:h-40 overflow-hidden">
        <img alt="thumbnail" src={thumbnails.medium.url} className="h-full w-full object-fill"></img>
        </div>
        <ul >
            <li className="text-wrap font-bold py-1 px-1">{title}</li>
            <li className="text-sm font-semibold px-1">{channelTitle}</li>
            <li>{viewCount} views</li>
            
        </ul>
</div>
    //    </div>
    )
}
export default VideoCard;