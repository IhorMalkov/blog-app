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
            title: `This is post ${i}`,
            slug: `this-is-slug-${i}`,
            body: 'uuuh',
        }
    })
}