import { createStore } from 'redux';

// Initial state
const initialState = {
  user: {
    username: 'Azedine',
    email: 'azedin@example.com'
  },
  videos: [
    { id: 1, title: 'First Video', description: 'This is the first video', url: 'video1.mp4' },
    { id: 2, title: 'Second Video', description: 'This is the second video', url: 'video2.mp4' },
  ]
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
};  

// Create store
const store = createStore(rootReducer);

export default store;
