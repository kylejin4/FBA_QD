import {useState} from 'react';

export default function Player({initialname, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initialname);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editableplayerName = <span className = "player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editableplayerName = <input type = "text" required value = {playerName} onChange = {handleChange}/>;
        // btnCption = 'Save'
    }

    return (
        <li className = {isActive ? 'active' : undefined}>
          <span className = "player">
            {editableplayerName}
            <span className = "player-symbol">{symbol}</span>
          </span>
          <button onClick = {handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}