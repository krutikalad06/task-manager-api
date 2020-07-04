const add = (a, b) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('numbers must ne positive')
            }
            resolve(a + b)
        }, 2000)
    })
}


// async returns promises

// const doWork = async ()=> {
//     //this will work(e) else return
//     throw new Error('something went wrong') 
//     return "krutika"
// } OR WITH AWAIT

const doWork = async ()=> {
   const sum = await add(1, -99)
   const sum2 = await add(sum, 60)
   const sum3 = await add(sum2, -5)
   return sum3

}
 

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})