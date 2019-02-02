import React, {
  PureComponent,
  Fragment
} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import styles from './index.less'

export default class IntroCommon extends PureComponent {
  static propTypes = {
    defaultNums: PropTypes.array
  }

  static defaultProps = {
    defaultNums: []
  }

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      defaultNums: props.defaultNums
    }
  }

  

  render() {
    return ( 
      
      <div>
        
        {this.state.defaultNums.map((v, i) => 
          ( 
            <div key={i}> {v.id} </div>
          )
        )} 
      </div>
    )
  }
}
