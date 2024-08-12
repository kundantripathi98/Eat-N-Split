import { useState } from "react";
// import { initialFriends } from "../App";
import Friend from "./Friend";

const FriendsList = ({friends, selectedFriend, onSelect}) => {
    // const friends = initialFriends;
    // const [friends, setFriends] = useState([...initialFriends]);
    return <ul>
        {friends.map((friend)=>(
            <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelect={onSelect}/>
        ))}
    </ul>
  }
  
  export default FriendsList;
  