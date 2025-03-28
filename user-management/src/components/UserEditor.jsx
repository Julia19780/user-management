import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/userSlice';

const UserEditor = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [formData, setFormData] = React.useState({});
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
      setMessage('');
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (!formData.name || !formData.surname || !formData.age || !formData.email) {
      setMessage('Все поля обязательны для заполнения!');
      return;
    }

    try {
      dispatch(updateUser({ id: selectedUser.id, data: formData }));
      setMessage('Пользователь успешно обновлен!');
    } catch (err) {
      setMessage('Ошибка при обновлении пользователя.');
    }
  };

  if (!selectedUser) return <div>Выберите пользователя для редактирования</div>;

  return (
    <div className="user-editor">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имя</label>
          <input
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            placeholder="Имя"
          />
        </div>
        <div className="form-group">
          <label>Фамилия</label>
          <input
            name="surname"
            value={formData.surname || ''}
            onChange={handleChange}
            placeholder="Фамилия"
          />
        </div>
        <div className="form-group">
          <label>Возраст</label>
          <input
            name="age"
            type="number"
            value={formData.age || ''}
            onChange={handleChange}
            placeholder="Возраст"
            min="18"
            max="80"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button type="submit" disabled={loading}>
          Сохранить
        </button>
      </form>
      {loading && <div>Загрузка...</div>}
      {error && <div className="error">{error}</div>}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default UserEditor;
