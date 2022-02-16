const FixIt2 = () => {
    return (
        <>
            <Book num="1" title="Ready Player One" author="Ernest Cline" />
            <Book num="2" title="The Hobbit" author=" J R R Tolkien" />
            <Book num="3" title="Do Androids Dream Of Electric Sheep?" author="Philip K. Dick"/>
        </>
                )

}

const Book = ({num}, {title}, {author}) => {
    return (
        <div>
            <h2>number: {num}</h2>
            <h2>title: {title}</h2>
            <h2>author: {author}</h2>
        </div>
    )
}

export default FixIt2