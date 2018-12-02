import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import {
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

class Team extends Component {

  render() {
    var data = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };


    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };


    var type = 'Line'
    return (
<<<<<<< HEAD
      <div>TEAM
                        <ChartistGraph data={data} options={options} type={type} />
=======
      <div className='container'>
        <DropdownButton
          title='Teams'>
          <MenuItem eventKey="1">Launchpad</MenuItem>
          <MenuItem eventKey="2">Apps</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="3">
            K8s
          </MenuItem>
          <MenuItem eventKey="4">Platform</MenuItem>
        </DropdownButton>
>>>>>>> * Added dropdown button
      </div>
    );
  }
}

export default Team;