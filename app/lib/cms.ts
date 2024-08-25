const delay = (ms:number) =>{
    return new Promise((resolve,reject) =>{
        setTimeout((resolve) =>{
            resolve(1);
        },ms)
    })
}

const getAllPosts = async () => {
    await delay(3000);
    return new Array(10).fill(1).map((_, i) => {
        return {
            title: 'This is post',
            slug: 'this-is-slug'
        }
    })
}