import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Pagination} from "./paginate";
import {FilmInfo} from "../FilmsList/types";

// const LIMIT_RANGE = 20;
 const getFilms = (offset: number) => {
//     return fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT_RANGE}${offset ? ('&offset=' + offset) : ''}`)
//         .then(response => response.json())
// }
//
// export const PaginationRoute = () => {
//     const [films, setFilms] = useState<FilmInfo[]>([]);
//     const [count, setCount] = useState();
//     const [offset, setOffset] = useState(0)
//
//     const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//         fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${e.target.value}`)
//             .then(response => response.json())
//             .then (data => setPosts(data.results))
//     };
//


//     useEffect(() => {
//         getPosts(offset)
//             .then(data => {
//                 setCount(data.count);
//                 setPosts(data.results);
//             })
// //            .catch(error => {
// //                setError (error.detail)
// //            })
//     },[offset])

//     const handlePageClick = (event: {selected:number}) => {
//         setOffset(LIMIT_RANGE * event.selected)
//     };

    return (
        <div>Hi</div>
        // <>
        //     <input type='text' onChange={handleInput}/>
        //     <h3>Example for pagination</h3>
        //     <div style={{  flexDirection: "row" ,
        //         rowGap: "40px",
        //         columnGap: "30px",
        //         flexWrap: "wrap",
        //         display: "flex",
        //         justifyContent: "space-between"}}>
        //         {posts.map((post) =>
        //             <MediumCard>
        //                 <ImageWrapperMed>
        //                     <img src={post.image} alt={'Medium Card'}/>
        //                 </ImageWrapperMed>
        //                 <NavLink key={post.id} to={`/post/${post.id}`}>
        //                     <TextContentMed>
        //                         <DataPostMed>{post.date}</DataPostMed>
        //                         <TitlePostMed>{post.title}</TitlePostMed>
        //                     </TextContentMed>
        //                 </NavLink>
        //                 <ButtonsForCardMed>
        //                     <LikesWrapper>
        //                         <Like>
        //                             <img src={like} alt={'like'}/>
        //                             <p>{post.lesson_num}</p>
        //                         </Like>
        //                         <Dislike>
        //                             <img src={dislike} alt={'dislike'}/>
        //                             <p></p>
        //                         </Dislike>
        //                     </LikesWrapper>
        //                     <OptionWrapper>
        //                         <Save><img src={Bookmark} alt={'bookmark'}/></Save>
        //                         <More><img src={MoreHorizontal} alt={'more'}/></More>
        //                     </OptionWrapper>
        //                 </ButtonsForCardMed>
        //             </MediumCard>
        //         )}
        //     </div>
        //     <Pagination count={count} handlePageClick={handlePageClick} />
        // </>
    )
}