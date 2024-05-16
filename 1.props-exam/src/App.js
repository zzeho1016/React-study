// react 라이브러리로부터 컴포넌트를 import
import React, { Component } from "react";  
import BookList from "./components/BookList";
import Books from "./static_data/Books"

class App extends Component {
  // 클래스 기반의 컴포넌트는 반드시 render()를 정의하고 있어야함
  render(){  
    return (
      <BookList books={ Books }/>
      
    )
  }
}

export default App;
 