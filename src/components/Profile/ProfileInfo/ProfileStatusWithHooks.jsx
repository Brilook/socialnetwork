import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value)
  };

  return (
    <div>
      { editMode &&
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status} />
        </div>
      }
      { !editMode &&
          <div>
          <span onDoubleClick={activateEditMode}>{status || `Status is empty ${String.fromCodePoint(0x1F625)}`}</span>
        </div>
      }
    </div>

  )
}


export default ProfileStatusWithHooks;