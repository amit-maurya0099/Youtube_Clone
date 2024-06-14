import React from 'react'
import Comment from './Comment';

const CommentsContainer = () => {
    const commentsData=[
        {
            name:"Amit",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eternal dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
            replies:[
                {
                    name:"Amit",
                    text:"lorem ipsum doler sit",
                    replies:[
                         {
                        name:"Amit",
                        text:"lorem ipsum doler sit",
                        replies:[
                            {
                                name:"Amit",
                                text:"lorem ipsum doler sit",
                                replies:[
                                    {
                                        name:"Amit",
                                        text:"lorem ipsum doler sit",
                                        replies:[
                            
                                        ]
                                    },
                    
                    
                                ]
                            },
            

            
                        ]
                    },
        
                    ]
                }, {
                    name:"Amit",
                    text:"lorem ipsum doler sit",
                    replies:[
        
                    ]
                },

            ]
        },
         {
            name:"Amit",
            text:"lorem ipsum doler sit",
            replies:[
                {
                    name:"Amit",
                    text:"lorem ipsum doler sit",
                    replies:[
        
                    ]
                },

            ]
        },
        {
            name:"Amit",
            text:"lorem ipsum doler sit",
            replies:[

            ]
        },
        {
            name:"Amit",
            text:"lorem ipsum doler sit",
            replies:[

            ]
        },
    ]

    const CommentsList=({comments})=>{
        // Don't use index as key
        return comments.map((comment,index)=>(
         <div key={index} className='w-[800px] border-r border-gray-200'>
        <Comment  data={comment}/>
        <div className='pl-3 ml-5 border border-l-black'>
              <CommentsList comments={comment.replies}/>
        </div>
        </div>
    ))
    }


  return (
    <div className='w-[800px] overflow-x-clip h-[400px] overflow-y-scroll no-scrollbar '>
      <h1 className='font-bold text-lg '>Comments</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
