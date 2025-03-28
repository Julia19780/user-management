import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';
import { FixedSizeList as List } from 'react-window';

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleSelectUser = (user) => {
    dispatch(selectUser(user));
  };

  const Row = ({ index, style }) => {
    const user = users[index];
    return (
      <div style={style} onClick={() => handleSelectUser(user)} className="user-card">
        <div className="user-card-content">
          <div className="user-name">
            {user.name} {user.surname}
          </div>
          <div className="user-details">
            <span>Возраст: {user.age}</span> |<span>{user.email}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="user-list">
      <List height={600} itemCount={users.length} itemSize={80} width="100%">
        {Row}
      </List>
    </div>
  );
};

export default UserList;
