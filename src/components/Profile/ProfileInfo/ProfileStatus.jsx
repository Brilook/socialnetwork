import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deActivateEditMode = (status) => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(status)
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div>
            <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                   onBlur={() => this.deActivateEditMode(this.state.status)}/>
          </div>
          : <div>
            <span
              onDoubleClick={this.activateEditMode}>{this.props.status || `Status is empty ${String.fromCodePoint(0x1F625)}`}</span>
          </div>}


      </div>

    )
  }

}


export default ProfileStatus;