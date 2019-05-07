import React, {Component} from 'react';

class FormComponent extends Component {
    render() {
        return (
            <div className="edit-form ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="b-card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material">
                                        <div className="form-group">
                                            <label className="text-contact">Full Name</label>
                                            <input className="form-control" placeholder="Johnathan Doe" type="text"/></div>
                                        <div className="form-group">
                                            <label className="text-contact">Email</label>
                                            <input className="form-control" placeholder="johnathan@admin.com" type="text"/></div>
                                        <div className="form-group">
                                            <label className="text-contact">Password</label>
                                            <input className="form-control" defaultValue="password" type="password"/></div>
                                        <div className="form-group">
                                            <label className="text-contact">Phone No</label>
                                            <input className="form-control" placeholder="123 456 7890" type="text"/></div>
                                        <div className="form-group">
                                            <label className="text-contact">Message</label>
                                            <textarea className="form-control" rows={5} defaultValue={""}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="text-contact">Select Country</label>
                                            <select className="form-control">
                                                <option className="city">London</option>
                                                <option className="city">India</option>
                                                <option className="city">Vietnam</option>
                                                <option className="city">Thailan</option>
                                                <option className="city">Singapore</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-success">Update Profile</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormComponent;