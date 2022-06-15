const {path} = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const p5_reference = [];
const p5_referenceComponents={};
if(p5_reference.length>0)
for(let i=0;i<p5_reference.length;i++){
    p5_referenceComponents[p5_reference[i]]=resolve(`../../fantastic/components/${p5_reference[i]}.vue`)
}


export const components = {
    ...p5_referenceComponents
};
