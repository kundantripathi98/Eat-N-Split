import { useState } from "react";
import Button from "./Button";

const Friend = ({friend, selectedFriend, onSelect}) => {
    const isSelected = selectedFriend?.id === friend.id;
    // console.log();
    
    
    function handleBtn (){
        onSelect(friend);
      }
    return <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p className = {`${friend.balance < 0 ? "red" : friend.balance === 0 ? "" : "green"}`} >{friend.balance === 0 ? `You and ${friend.name} are even` : `${friend.balance < 0 ? "You" : `${friend.name}`} owe ₹${Math.abs(friend.balance)}`}</p>

        <Button onClick={handleBtn}>{!isSelected ? "Select": "Close"}</Button>
    </li>
}

export default Friend;