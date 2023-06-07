declare namespace API {

    // 详情页 - 卡片数据类型

    type DetailCardResult = {
        detailCard: DetailCard[]
    }

    type DetailCard = {
        createMonth: number;
        detailType: number;
        amountSum: string;
    };

    type DetailListResult = {
        detailList: DetailList[]
    }

    // 详情页 - 列表数据类型
    type DetailList = {
        dateNumber: number;
        createWeekDay: number | string;
        detailType: number;
        amountSum: string;
        ledgerDetail: {
            amount: string;
            remark: string;
            detailCategory: {
                icon: string;
                iconName: string;
            }
        }
    }
}