import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            bookList: ["Harry Pptter", "Tom & Jerry", "Pokemon", "Godzilla", "Doremon"]
        }
    },
    getters:{
        totalBook(state){
            return state.bookList.length;
        }
    },
    mutations: {
        ADD_BOOK(state, data) {
            state.bookList.push(data);
        },
        REMOVE_BOOK(state, index) {
            state.bookList.splice(index, 1)
        },
        EDIT_BOOK(state, data){
            state.bookList[data.index] = data.name
            // console.log("edit = ", data);
        }
    },
    actions: {
        addBookAction({commit}, payload){
            commit("ADD_BOOK",payload);
        },
        removeBookAction({commit}, payload){
            commit("REMOVE_BOOK", payload);
        },
        editBookAction({commit}, payload){
            commit("EDIT_BOOK", payload);
        },
    }
})

export default store;
// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)