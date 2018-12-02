import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Col, Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
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
  width: 70%;
`;

class Team extends Component {

  render() {
    var data = {
      labels: ['Phil Kang', '1', 'Thomas Pech', 'Nate', 'Jade Hayes', 'Jacob Birk', 'Nathaniel Ford', 'Kripa Argwal', 'Steven Davidovitz'],
      series: [
        [75, 70, 60, 71, 92, 94, 82, 65, 60, 80],
        [65, 60, 40, 61, 92, 74, 92, 85, 90, 80]
      ]
    };


    var options = {
      high: 100,
      low: 0,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };


    var type = 'Line'
    return (
      <div className='container'>
        <Grid>
          <Row>
            <StyledDropdownContainer>
              <DropdownButton
                title='Teams'>
                <MenuItem eventKey="1">Launchpad</MenuItem>
                <MenuItem eventKey="2">Apps</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="3">K8s</MenuItem>
                <MenuItem eventKey="4" active>Platform</MenuItem>
              </DropdownButton>
            </StyledDropdownContainer>
            <StyledH3>Team: Platform</StyledH3>
          </Row>
          </Grid>
              <ChartistGraph
                    className='graph'
                    data={data}
                    options={options}
                    type={type}
                    />
      </div>

    );
  }
}

export default Team;