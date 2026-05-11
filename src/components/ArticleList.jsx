import Article from "./Article";

function ArticleList(props) {
    return (
        <main>
          {
            props.posts.map((posts) => (
                <Article
                    key = {posts.id}
                    title = {posts.title}
                    date = {posts.date}
                    preview = {posts.preview}
                    minutes = {posts.minutes}
                />
            )
        )
          }
        </main>
    )
}

export default ArticleList;