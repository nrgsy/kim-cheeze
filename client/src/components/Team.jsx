import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import './Team.css';


import {
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

const StyledDropdownContainer = styled.div`
  margin-bottom: 2em;
  text-align: left;
`;

const StyledGraphContainer =  styled.div`
  margin: 0 0 3em 6em;
  width: 60%;
`;

const StyledH3 =  styled.h3`
  text-align: center;
  width: 100%;
`;

class Team extends Component {

  render() {

    var line_data = {
      labels: ['Phil Kang', '1', 'Thomas Pech', 'Nate', 'Jade Hayes', 'Jacob Birk', 'Nathaniel Ford', 'Kripa Argwal', 'Steven Davidovitz'],
      series: [
        [75, 70, 60, 71, 92, 94, 82, 65, 60, 50],
        [65, 60, 40, 61, 92, 74, 92, 85, 90, 80]
      ]
    };


    var line_options = {
      high: 100,
      low: 0,  showArea: true,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return null;
        }
      }
    };

    var data = {
      labels: ['Phil Kang', 'Thomas Pech', 'Jade Hayes'],
      series: [
        [80, 42, 92],
        [85, 80, 92]
      ]
    };


    var options = {
      high: 100,
      low: 0
    };


    var type = 'Bar'
    var line_type = 'Line'
    return (
      <div className='container'>
        <Grid>
          <Row>
            <StyledH3>Team Overview</StyledH3>
          </Row>
          </Grid>
          <Link to="/employee/Thomas-Pech">
          <div className="chart-container">
          <ChartistGraph
            className='graph'
            data={data}
            options={options}
            type={type}
          />
          </div>
          </Link>
          <div className="line-chart-container">
          
          <ChartistGraph
            className='graph'
            data={line_data}
            options={line_options}
            type={line_type}
          />
          </div>
              
      </div>

    );
  }
}

export default Team;