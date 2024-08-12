import { useState } from "react";
import Button from "./Button";

const AddFriendFrom = ({onAdd, changeState}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e){
        e.preventDefault();

        const id = crypto.randomUUID;
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        }

        if(newFriend.name !== ''){
            onAdd((items)=>[...items, newFriend]);
            changeState(false)
        }

        setName('');
    }

    return <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="">🧑‍🤝‍🧑Friend Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        <label htmlFor="">📷Image URL</label>
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>

        <Button>Add</Button>
    </form>
}

export default AddFriendFrom;