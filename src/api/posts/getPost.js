import extendedAxios from '../axios'

const getPost = () => {
    return extendedAxios('POST', '/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

export default getPost;