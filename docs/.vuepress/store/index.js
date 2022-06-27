import {createStore} from 'vuex'


//一个简单的示例
const store = createStore(
    {
        state(){
            return{
                count:0,
                theme:'light',
                loop:'main'
            }
        },
        getters:{
            lageCount: state=>{
                return state.count>100?state.count:0;
            }
        },

        mutations:{
            increment(state){
                state.count++
            },
            clearCount(state){
                state.count = 0
            },
            setTheme(state,payload){
                state.theme = payload;
                document.querySelector('body').className = payload;
            }
        },

        actions:{
            increment({commit}){
                commit('increment')
            }
        }
    }
)

export default store
