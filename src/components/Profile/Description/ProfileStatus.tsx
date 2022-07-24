import React, { ChangeEvent } from 'react';


type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void,
}
type LocalStateType = {
    editMode: boolean,
    status: string,
}


class ProfileStatus extends React.Component<ProfileStatusPropsType, LocalStateType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activatedMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onchangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: LocalStateType) {
        if (this.props.status !== prevState.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {
                !this.state.editMode &&
                <div>
                    <span onClick={this.activatedMode}>{this.props.status || '------'}</span>
                </div>
            }
            {
                this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={this.deactivatedMode}
                           onChange={ (e) => this.onchangeStatus(e) }
                           value={this.state.status}/>
                </div>
            }

        </div>
    }

}

export default ProfileStatus