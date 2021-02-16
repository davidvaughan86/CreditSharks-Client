import InputField from './InputField'
import SubmitButton from './SubmitButton'
import UserStore from './UserStore'
import React , {Component} from 'react'
import LogOn from './LogOn'
import { render } from '@testing-library/react'
import { withRouter } from 'react-router-dom';


class LoginFormTest extends Component {
    constructor(props) {
    super(props)
    this.state = {
        username: '',
        password: '',
        buttonDisabled: false
        }
        this.setInputValue = this.setInputValue.bind(this);
    };

    setInputValue(property, val) {
        val = val.trim();
        if(val.length > 30){
            return;
        }
        this.setState({[property]:val
        })
    };
    resetForm() {
        this.setState({
        username: '',
        password: '',
        buttonDisabled: false
        })
    }
    async LogOn () {
        if (!this.state.username) {
            return;
        }
        if(!this.state.password) {
            return;
        }
        this.setState({
            buttonDisabled:true
        })
    
        try{

            let res = await fetch('/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password

            })
        });
        console.log('test')

        let result = await res.json();
    
        if (result && result.id) {
            UserStore.isLoggedIn = true;
            UserStore.username = result.username
            const { history } = this.props;
            if(history) history.push('/members');
        }
        else if (result && result.success === false) {
            this.resetForm();
            alert(result.msg)
        }
    }
        
        catch(e){
            console.log(e)
            this.resetForm()
        }
    }
        
render() {
        return (
            <div className="LContainer">
            <div className="logonFrame">
                Please Sign In
            
            <InputField
            type='text'
            placeholder='Username'
            value={this.state.username ? this.state.username: ''}
            onChange={(val) => this.setInputValue('username', val)}
                    
            />
            <InputField
           type='password'
           placeholder='Password'
           value={this.state.password ? this.state.password: ''}
           onChange={(val) => this.setInputValue('password', val)}
            />
            <SubmitButton 
            text='Login'
            disabled={this.state.buttonDisabled}
            onClick={ () => this.LogOn()}
            />
            </div>
            </div>
        )
    }
}

export default withRouter(LoginFormTest);