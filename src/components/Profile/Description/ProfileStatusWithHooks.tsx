import React, { ChangeEvent, useState, useEffect } from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void,
}
type LocalStateType = {
    editMode: boolean,
    status: string,
}


const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onchangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
        props.updateStatus(/*status*/e.currentTarget.value);
    }


    return <>
            { !editMode &&
                <>
                    <span onClick={activateMode}>{props.status || '------'}</span>
                </>
            }
            { editMode &&
                <>
                    <input autoFocus={true}
                           onBlur={deactivateMode}
                           onChange={ (e) => onchangeStatus(e) }
                           value={status}/>
                </>
            }

        </>


}

export default ProfileStatusWithHooks;