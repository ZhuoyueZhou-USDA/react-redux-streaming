import React from 'react';
import { connect } from 'react-redux';
import { createStream } from "../../actions";
import  StreamForm  from "./StreamForm";

class StreamCreate extends React.Component {
    onSubmit = (formValues)=>{
        this.props.createStream(formValues);
    }
    render(){
        return (
            <div> 
                <h3>Create Stream</h3>
             <StreamForm onSubmit={this.onSubmit} />
            </div>
            // <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            //     <Field name="title" component={this.renderInput} label="Enter title" />
            //     <Field name="description" component={this.renderInput} label="Enter description" />
            //     <button className="ui button primary">Submit</button>
            // </form>
        );
    }
}


// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate        
// })(StreamCreate);
export default connect(null,{createStream})(StreamCreate);