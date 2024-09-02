import { useState } from "react";
import Button from "./Button";

const SplitBillForm = ({selectedFriend, onSplitBill}) => {
    const [billVal, setBillVal] = useState();
    const [yourExpense, setYourExpense] = useState(undefined);
    const [whoPaying, setWhoPaying] = useState('user');
    
    const friendExpense = billVal - (yourExpense == '' ? 0 : yourExpense);

    function handleSubmit(e){
        e.preventDefault();
        if(!billVal || !yourExpense) return;

        onSplitBill(whoPaying === "user" ? friendExpense : -yourExpense);    
    }
    
    return <form action="" className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label htmlFor="">💰Bill Value</label>
        <input type="number" value={billVal} onChange={(e) => setBillVal(Number(e.target.value))}/>

        <label htmlFor="">🕴️Your Expense</label>
        <input type="number" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > billVal ? yourExpense : Number(e.target.value))}/>

        <label htmlFor="">🧑‍🤝‍🧑{selectedFriend.name}'s Expense</label>
        <input type="text" disabled value={isNaN(friendExpense) ? '' : friendExpense}/>

        <label htmlFor="">🤑Who is paying the bill</label>
        <select value={whoPaying} onChange={(e) => setWhoPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}

export default SplitBillForm;
