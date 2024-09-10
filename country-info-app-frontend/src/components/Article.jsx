export default function Article(props) {
    return (
        <article className='flex flex-col w-100 justify-center items-center gap-2'>
            <h2 title={props.title} className='text-3xl'>{props.title}</h2>
            <p title={props.description} className='text-lg text-center w-80'>{props.description}</p>
        </article>
    )
}