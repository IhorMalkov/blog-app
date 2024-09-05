const delay = (ms:number) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(1);
        },ms)
    })
}

export const getAllPosts = async () => {
    await delay(3000);
    return new Array(10).fill(1).map((_, i) => {
        return {
            title: `This is post ${i+1}`,
            slug: `this-is-slug-${i+1}`,
            body: `post ${i+1}`,
        }
    })
}