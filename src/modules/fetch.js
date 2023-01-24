/* eslint-disable no-restricted-syntax */
const toDoListData = [{
  description: 'clean the room',
  completed: true,
  index: 0,
},
{
  description: 'Do sport',
  completed: true,
  index: 1,
},
{
  description: 'Study german',
  completed: false,
  index: 2,
},
];
const fetchingData = () => {
  const toDoListContainer = document.querySelector('#to_do_container');
  const li = document.createElement('li');
  for (const item of toDoListData) {
    li.innerHTML += `<input type="checkbox" name="to-do" id="to_do_list">
          ${item.description} <hr> 
          `;
    toDoListContainer.appendChild(li);
  }
};

export default fetchingData;
