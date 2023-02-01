/**
 * @jest-environment jsdom
 */
const tasksApp = require('./tasksApp');

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
  
  
// const localStorageMock = (function() {
//     let store = {};
//     return {
//       getItem: function(key) {
//         return store[key] || null;
//       },
//       setItem: function(key, value) {
//         store[key] = value.toString();
//       },
//       clear: function() {
//         store = {};
//       }
//     };
//   })();
  
//   Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  
 
 
  
//   describe('Tasks App', () => {
//     describe('Add item functionality', () => {
//       it('should add a task to the listArray and store it in localStorage', () => {
//         const listInput = document.querySelector('#lists-input');
//         listInput = 'Test task';
//         const submitEvent = new Event('submit');
//         document.querySelector('form').dispatchEvent(submitEvent);
//         const listArray = JSON.parse(localStorage.getItem('listArray'));
//         expect(listArray[listArray.length - 1].discription).toBe('Test task');
//       });
  
      it('should add a <li> element to the list in the DOM', () => {
        document.innerHTML=`<div class="col-12" id="list" data-index='' id='list-holder'>
        <p class="checkboxP"> 
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck">
        <span contenteditable="false" index='' id="discription"></span>
        </p>
        <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
    </div>`;
    
    tasksApp();
        const list = document.querySelectorAll('#list-holder');
        expect(list).toHaveLength(1);
    });
  
    describe('Delete item functionality', () => {
      it('should delete a task from the listArray and update it in localStorage', () => {
        // Add code to delete a task and test
      });
  
      it('should delete a <li> element from the list in the DOM', () => {
        // Add code to delete a task and test
      });
    });

  