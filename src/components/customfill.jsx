import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuContent, setMenuContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = () => {
    const data = [
      { id: 1, name: 'Menu 1', address: 'Address 1', date: '2023-05-25' },
      { id: 2, name: 'Menu 2', address: 'Address 2', date: '2023-05-26' },
      { id: 3, name: 'Menu 3', address: 'Address 3', date: '2023-05-27' },
    ];
    setMenuData(data);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setMenuContent(menuContent + menu.name);
  };

  const handleDragStart = (event, menu) => {
    event.dataTransfer.setData('text/plain', menu.name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedMenuName = event.dataTransfer.getData('text/plain');
    setMenuContent(menuContent + draggedMenuName);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Menu List</h1>
      <ul>
        {menuData.map((menu) => (

          <li
            key={menu.id}
            onClick={() => handleMenuClick(menu)}
            draggable
            onDragStart={(event) => handleDragStart(event, menu)}
          >
            {menu.name}
          </li>
          
        ))}
      </ul>
      <h2>Selected Menu</h2>
      {selectedMenu && (
        <div>
          <h3>{selectedMenu.name}</h3>
          <p>Address: {selectedMenu.address}</p>
          <p>Date: {selectedMenu.date}</p>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
          <ReactQuill
            value={menuContent}
            onChange={setMenuContent}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </div>
      )}
    </div>
  );
};

export default App;
