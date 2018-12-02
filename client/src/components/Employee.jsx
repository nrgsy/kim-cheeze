import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import './animate.css';
import './Employee.css';


import {
  DropdownButton,
  MenuItem,
  Image,
  Alert,
  Button
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
`;


class Employee extends Component {

  render() {
    var data = {
      labels: ['Phil Kang', '1', 'Thomas Pech', 'Nate', 'Jade Hayes', 'Jacob Birk', 'Nathaniel Ford', 'Kripa Argwal', 'Steven Davidovitz'],
      series: [
        [75, 70, 60, 71, 92, 94, 82, 65, 60, 42]      ]
    };

    var pie_data = {labels: ['',''], series:[1,9]}

    var options = {
      high: 100,
      low: 0,  showArea: true,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return  null;
        }
      }
    };


    var type = 'Line'
    return (
      <div className='container'>
        <Grid>
          <Row>
            <div className="title">
              <StyledH3><div className="profile">
                <Image src="https://i.imgur.com/glelrEn.jpg" responsive circle />
              </div>Thomas Pech<div className="social">
              <p className="social-label">Employee sociability: </p>
              <Link to="/social">
              <ChartistGraph
                    className='social-graph'
                    data={pie_data}
                    // options={options}
                    type={'Pie'}
                    /></Link> 90%</div></StyledH3>
              </div>
          </Row>
          </Grid>
              <ChartistGraph
                    className='jgraph'
                    data={data}
                    options={options}
                    type={type}
                    />
                          <Button bsStyle="primary tada">Schedule 1-1</Button><Alert bsStyle="warning">
  <strong>Thomas</strong> hasn't had a raise for <strong>2 years</strong>.
</Alert>

      </div>


    );
  }
}

export default Employee;