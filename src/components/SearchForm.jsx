import React, { Component } from 'react'
import 'components/components.css';

export class SearchForm extends Component {
  render() {
    return (
      <div className="box_form">
        <form action="#" className="form">
          <input type="text" className="tf_comm" placeholder="검색어를 입력하세요" />
          <button type="reset" className="btn_reset"></button>
        </form>
      </div>
    )
  }
}

export default SearchForm
