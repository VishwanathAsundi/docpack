import React from 'react';
import { connect } from 'react-redux';

class  DocPackLogin extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <section className="login-panel">
                <div className="logo-panel">
                    <img src='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_e902de82caaedd6c9038b0bef9e0a0dc/docpack.png' alt="logo"/>
                </div>
                <h5 className="mb-4">Welcome! Please Sign In with your work email address.</h5>
                <button type="button" className="btn btn-primary btn-block my-3">Login With Google</button>
                <p>If you don't use google suite sign in with your business email:</p>
                <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModalCenter">Login With Email</button>
        
                <div class="modal fade text-left" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Login with your Email</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Enter your email address, and we'll send you a passcode to log you in:</p>
                        <input type="email" className="form-control" placeholder="Type Your Email Here"></input>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Verfy Email</button>
                    </div>
                    </div>
                </div>
                </div>
                
            </section>
          );
    }
  
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
    //   counter: state.counter
    }
  }
  


// export default connect(
// mapStateToProps,
// null
// )(DocPackLogin);

export default DocPackLogin;
