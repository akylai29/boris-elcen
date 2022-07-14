import Card from "../components/card/Card"
import { useState } from 'react'

function Mainpage(props) {
    const arr = [
        {
            id: 1,
            title: "Продаю 2км кв в 12мкр",
            price: 45000,
            img: "https://i.pinimg.com/originals/46/19/55/4619553e282897fcff0dc677a3074b70.jpg"
        },
        {
            id: 2,
            title: "Продаю 3км кв в 8мкр",
            price: 60000,
            img: "https://i.ebayimg.com/00/s/NzUyWDEwMDc=/z/LoYAAOSwjhZbO6Zh/$_10.JPG?set_id=880000500F"
        },
        {
            id: 3,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://i.pinimg.com/originals/c4/97/94/c49794c6b464b2d608d294e51027f6df.jpg"
        },
        {
            id: 4,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://dk-nn.ru/800/600/https/i.pinimg.com/originals/c3/60/63/c36063ed63b4f9358071415b1c377e88.jpg"
        },
        {
            id: 5,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://ventfasady.ru/uploads/custom/image/cottages/termodrevesina_4.jpg"
        },
        {
            id: 6,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://avatars.mds.yandex.net/i?id=a11438e8ad3bbfcd3de1d4d228f0ed4a-4238543-images-thumbs&ref=rim&n=33&w=333&h=188"
        },
        {
            id: 7,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://avatars.mds.yandex.net/i?id=1215c19e3e69941450c3d8e65db197fa-5232642-images-thumbs&ref=rim&n=33&w=281&h=188"
        },
        {
            id: 8,
            title: "Продаю 1км кв в 3мкр",
            price: 3000,
            img: "https://avatars.mds.yandex.net/i?id=89fce8f210b7f651ab1a0f09ad3c6a4b-5307529-images-thumbs&ref=rim&n=33&w=263&h=188"
        },
    ];
    const [objArr, setValue] = useState(arr);

    const result = objArr.map((obj) => {
        return <Card
            img={obj.img}
            title={obj.title}
            price={obj.price}
            id={obj.id} />

    });
    return (
        <div className="page">
            <h1 className="title">Последние объявления</h1>
            <div className="cards__wrapper">
                {result}
            </div>
            <h2 className="title">О нас </h2>
        </div>
    )
}
export default Mainpage