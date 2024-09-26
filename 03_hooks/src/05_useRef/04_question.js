import { useState } from 'react'

// todolist 기능 까지는 구현. 50% 완성.


const Board = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);
    const [searchs, setSearchs] = useState("");



    const handleAddPost = (e) => {
        e.preventDefault();
        if(!title || !content) return;

        const newPost = {title, content};
        setPosts([...posts, newPost]);
        setTitle('');
        setContent('');
    }

    const deletePost = (posts) => {
        setPosts(posts.filter((post) => post.posts !== posts));
    }



    return (
        <>
            <div>
                <h1>게 시 판</h1>
                
                <input type="text" placeholder="제목" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br/><br/>

                <textarea type="text" placeholder="내용" value={content} onChange={(e)=>setContent(e.target.value)}/>
                <br/>

                <button onClick={handleAddPost}>게시</button>
                <br/><br/>

                <input type="text" placeholder="검색" value={searchs} onChange={(e)=>setSearchs(e.target.value)}/>

                <ul>
                    {posts.map((post) => (
                        <li key={post}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <button onClick={() => deletePost(posts)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
            <hr/>
        </>
    )
}

export default Board;