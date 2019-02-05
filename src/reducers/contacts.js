const defaultState = {
  // the state for this reducer goes here
    list: [
      {
          id:1,
          title: 'John Doe',
          task: 'johndoe@gmail.com',
          phone: '540-876-2671'
      },
      {
        id:2,
        title: 'Sabrina Brown',
        task: 'sabrinabrown1@gmail.com',
        phone: '703-231-8927'

      },
      {
        id:3,
        title: 'Alex Lopez',
        task: 'alexlopez@gmail.com',
        phone: '540-875-9763'
      },
      {
        id:4,
        title: 'Alessandra Burks',
        task: 'alessandraburks@gmail.com',
        phone: '540-835-9123'
      },
      {
        id:5,
        title: 'David Williams',
        task: 'davidwilliams@gmail.com',
        phone: '210-655-9713'
      },
    ],
    title: '', 
    task: '',
    phone: ''
};

// Reducers must return their initial state if the state variable is undefined
export const contacts = (state = defaultState, action) => {
  switch (action.type) {
    // cases for your action type go here
    case 'CHANGE_LIST':
        const listItem = state.list.filter(item => item.id === parseInt(action.id, 10))
        return {
            ...state,
            title: listItem[0].title,
            task: listItem[0].task,
            phone: listItem[0].phone,
    }

    case 'CAPTURE_INPUT':
        console.log('[NAME]', action.payload.name)
        console.log('[VALUE]', action.payload.name)
        return {
            ...state,
            [action.payload.name]: action.payload.value
    }
    case 'UPDATE':
        const updatedList = state.list.map(item => {
            if (item.id === parseInt(action.id, 10)) {
                item.title = state.title;
                item.task = state.task;
                item.phone = state.phone;
            }
            return item;
        });
        return {
            ...state,
            list: updatedList
        }
    case 'DELETE':
        const newList = state.list.filter(item => item.id !== (parseInt.id, 10));
        return {
            ...state,
            list: newList
        }
    case 'ADD':
        let id;
        state.list.length > 0 ? state.list[state.list.length - 1].id + 1 : id = 1;
        const newToDo = {id: id, title: state.title, task: state.task}
        return {
            ...state,
            list: state.list.concat(newToDo)
        }

    default:
        return state;
  }
}
 export default contacts;
