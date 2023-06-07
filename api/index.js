import {
    endpoint
} from './url'

function Api(query, variables) {
    const param = {
        query,
        variables,
    };
    return new Promise((resolve, reject) => {
        wx.request({
            url: endpoint,
            data: param,
            method: 'POST',
            success: (res) => {
                console.log(res)
                const {
                    errors,
                    data
                } = res.data;
                errors ? reject(errors.map(({
                    message
                }) => message)) : resolve(data);
            },
            fail: (error) => reject(error),
        });
    });
}

query DetailCard($createMonth: Int!) {
    detailCard(createMonth: $createMonth) {
        createMonth
        detailType
        amountSum
    }
}
module.exports = {
    Api
}