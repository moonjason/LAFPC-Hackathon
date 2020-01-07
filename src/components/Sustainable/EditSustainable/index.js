import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';

import {
  Container,
  Form,
  H1,
  Cancel
} from './style'

class EditSustainable extends Component{
  render(){
    return(
      <Container>
        <Form onSubmit={this.props.closeAndEdit}>
          <Cancel onClick={this.props.cancelEdit}><CancelIcon /></Cancel>
          <H1>Edit Sustainability</H1>
          <div>
            <TextField 
              label='indicator'
              type="text" 
              placeholder="indicatoer" 
              name="indicator" 
              value={this.props.editData.indicator}
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='baseline'
              type="text" 
              placeholder="baseline" 
              name="baseline"
              value={this.props.editData.baseline}
              onChange={this.props.handleFormChange}
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField
              label='update'
              type="text" 
              placeholder="update" 
              name="update" 
              value={this.props.editData.update[0]}
              onChange={this.props.handleFormChange}
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
            <div>
            <div>
            <TextField 
              label='sources'
              type="text" 
              placeholder="sources" 
              name="sources"
              value={this.props.editData.sources} 
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='change'
              type="text" 
              placeholder="change" 
              name="change" 
              value={this.props.editData.change}
              onChange={this.props.handleFormChange}
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='notes'
              type="text" 
              placeholder="notes" 
              name="notes" 
              value={this.props.editData.notes}
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='data status'
              type="text" 
              placeholder="data status" 
              name="dataStatus" 
              value={this.props.editData.dataStatus}
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
          <div>
            <TextField 
              label='group'
              type="text" 
              placeholder="group" 
              name="group"
              value={this.props.editData.group} 
              onChange={this.props.handleFormChange} 
              margin="normal"
              variant="outlined"
              style={{margin: "10px"}}
            />
          </div>
              <small>{this.props.error}</small>
            </div>
          </div>
          <Button type="submit" variant="outlined" style={{margin: "10px"}}>update</Button>
        </Form>
      </Container>
    )
  }
}

export default withRouter(EditSustainable);