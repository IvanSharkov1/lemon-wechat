import { getDetailCard, getDetailList } from "../../api/api"
import dayjs from '../../utils/dayjs.min.js'
import { weekString } from "../../utils/util"

Page({
    data: {
        detailCard: <any>[],
        detailList: <any>[],
    },
    onLoad() {
        Promise.all([getDetailCard(), getDetailList(7, 0)]).then(value => {
            const [detailCardResult, detailListResult] = value
            const newDetailListResult = detailListResult.detailList.map(value => {
                value.dateNumber = dayjs(value.dateNumber.toString()).format("MM月DD日");
                value.createWeekDay = weekString(value.createWeekDay.toString());
                return { ...value }
            });
            this.setData({
                detailCard: detailCardResult.detailCard,
                detailList: newDetailListResult,
            })
        })
    }
})
