type Props = {}
const List = (props: Props) => {
    let data = false
    return (
        <>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
            <p
                style={{
                    color: 'white',
                    backgroundColor: data ? 'red' : 'purple',
                    padding: '15px',
                }}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, temporibus facere ab magni repudiandae nam enim
                consequuntur nobis nihil, necessitatibus dolorem aliquam cum vel
                ipsam voluptas iusto hic quae rerum.
            </p>
            <p>
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
