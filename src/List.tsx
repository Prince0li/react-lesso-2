import classes from './List.module.css'

type Props = {}
console.log(classes)
const { content, test, articleDesc } = classes
const List = (props: Props) => {
    let data = true
    return (
        <>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
            <p className={`${articleDesc} ${data ? content : test}`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, temporibus facere ab magni repudiandae nam enim
                consequuntur nobis nihil, necessitatibus dolorem aliquam cum vel
                ipsam voluptas iusto hic quae rerum.
            </p>
            <p className="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, magni quod veniam illo quibusdam vel iusto quam
                perferendis voluptas reiciendis temporibus labore incidunt,
                reprehenderit exercitationem veritatis cum. Ipsa, autem
                accusamus.
            </p>
        </>
    )
}
export default List
