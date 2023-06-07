export default function request<T>(data: string, variables?: object): Promise<T> {
    const param = {
        query: data,
        variables: variables
    };
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'http://192.168.31.26:3000/graphql',
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(param),
            success: (res) => {
                const { data, statusCode, errMsg } = res;
                if (statusCode === 200) {
                    resolve((data as any).data)
                } else {
                    reject(errMsg)
                }
            },
            fail: (error) => {
                reject(error.errMsg)
            }
        })
    })
}