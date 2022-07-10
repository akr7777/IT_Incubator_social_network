import React from 'react';


type ProfileStatusPropsType = {
    status: string
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activatedMode () {
        this.setState({
            editMode: true
        })
    }
    deactivatedMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {
                !this.state.editMode &&
                <div>
                    <span onClick={this.activatedMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {
                this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivatedMode.bind(this)} value={this.props.status}/>
                </div>
            }

        </div>
    }

}

export default ProfileStatus