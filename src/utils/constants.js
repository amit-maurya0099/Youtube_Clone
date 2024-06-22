

 export const Live_chat_count=15;


export const YOUTUBE_VIDEOS_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;


// export const Youtube_Search_api="https://api.tvmaze.com/search/shows?q=" ;
export const Youtube_search_keyword=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${process.env.REACT_APP_API_KEY}`;