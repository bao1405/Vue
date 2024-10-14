import {createStore} from "vuex"
const store = createStore({
    state:{
        count:0,
        users:[],
        products:[]
    },
    getters:{

    },
    mutationa:{
        // 
        // 
        increase:(state,payload)=>{
            state.count+=payload.payload;

        }
    },
    actions:{
        // cũng đi cập nhạt thay đổi state,(XỬ LÝ TÁC VỤ BẤT ĐỒNG BỘ)
    }
})

export default store;