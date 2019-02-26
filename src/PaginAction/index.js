import React, { Component } from "react"
import { Pagination } from "react-bootstrap"
// 如果有需要，在这里引入当前目录样式

let pageItem = (total, display, current) => {
  let items = []
  // let pageSize = Math.ceil(total / display)
  let startRow = (current - 1) * display + 1
  let endRow = current * display
  for (let number = startRow; number <= endRow; number++) {
    items.push(
      <Pagination.Item active={number === current} key={number}>{number}</Pagination.Item>
    )
  }
  return items
}


class PaginAction extends Component {
  render () {
    let total = this.props.total
    let display = this.props.display
    let current = this.props.current
    if (total > 0) {
      return (
        <div>
          <Pagination bsSize="medium">
            <Pagination.First/>
            <Pagination.Prev/>
            {pageItem(total, display, current)}
            <Pagination.Next/>
            <Pagination.Last/>
          </Pagination>
        </div>
      )
    }

  }
}

export default PaginAction