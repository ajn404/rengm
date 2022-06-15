const data = [
    {
        id:1,
        children:[
            {
                id:2,
                children: [
                    {
                        id:3
                    }
                ],

            },
            {
                id:4,
                children:[
                    {
                        id:5
                    },{
                        id:6
                    }
                ]
            }
        ]
    },{
    id:7
    },
    {
    id:8,
        children: [
            {
        id:9,
            children: [{
            id:10
            }]
        }]
    }
]
let filterData = []
const getFilterData = (treeData,callback)=>{
    for(let i = 0;i<treeData.length;i++){
        let item = {}
        Object.defineProperty(item,`${treeData[i].id}`,{
            enumerable:true,
            configurable:true,
            set(v) {
                value = treeData[i].children
            },
            get() {
                return treeData[i].children
            }
        })
        filterData.push(item)
        if(treeData[i].children){
            getFilterData(treeData[i].children)
        }
    }
}
getFilterData(data);
console.log(filterData)

