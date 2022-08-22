

function solution(sizes) {
    sizes.forEach((v)=> v.sort((a,b) => {
        return b-a;
    }))//[i,j] (i>j)정렬 

    let wArr = [];
    let hArr = [];
 
    for (let i=0; i<sizes.length; i++){
        wArr.push(sizes[i][0]);
        hArr.push(sizes[i][1]);
    }

    return Math.max(...wArr) * Math.max(...hArr);
}