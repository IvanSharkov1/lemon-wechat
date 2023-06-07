export const DetailCardQuery = `
query DetailCard($createMonth: Int!) {
    detailCard(createMonth: $createMonth) {
      createMonth
      detailType
      amountSum
    }
  }
`

export const DetailListQuery = `
query DetailList($first: Int!, $offset: Int!, $createMonth: Int!) {
    detailList(first: $first, offset: $offset, createMonth: $createMonth) {
      dateNumber
      createWeekDay
      detailTypes {
        detailType
        amountSum
      }
      ledgerDetails {
        detailCategory {
          icon
          iconName
        }
        remark
        amount
      }
    }
  }
`