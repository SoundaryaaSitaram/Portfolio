import React from 'react'
//rafc - install es6/7 extension 
export const Header = () => {
    // BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.Using BEM conventions.Used when using lot of classnames(to make it proper).To avoid clashing in classnames and their styles
  return (
    <div classname = "header">
    <div classname ="header_left">
        <h1>Develop<span>er</span></h1>
    </div>
    <div classname = "header_right">

    </div>
    </div>
  )
}
