
import { DetailCardQuery, DetailListQuery } from "./gql";
import request from "./request";

// 详情页 - 卡片数据
export async function getDetailCard() {
    return request<API.DetailCardResult>(DetailCardQuery, { createMonth: 6 })
}

// 详情页 - 列表数据
export async function getDetailList(first: number, offset: number) {
    return request<API.DetailListResult>(DetailListQuery, { first, offset, createMonth: 3 })
}