import React, {Component} from 'react';

class TableComponent extends Component {

    onChangerView = () => {
        this
            .props
            .onChangerView();
    }
    render() {

        return (
            <div className="add-form">
                <div className="container-fluid">
                    <div className="card-body">
                        <div className="header-card">
                            <div>
                                <h4 className="card-title">Top Selling Products</h4>
                            </div>
                        </div>
                        <div className="add-product">
                            <button className="btn-add" onClick={this.onChangerView}>ADD</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="bg-table">
                                        <th scope="col">Product</th>
                                        <th scope="col">License</th>
                                        <th scope="col">Support Agent</th>
                                        <th scope="col">Technology</th>
                                        <th scope="col">Tickets</th>
                                        <th scope="col">Sales</th>
                                        <th scope="col">Earnings</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">
                                            <div className="product-name">
                                                <a  className="link-name user-1">MA</a>
                                                <h4 className="b-text">Monster Admin</h4>
                                            </div>
                                        </td>
                                        <td>Single Use</td>
                                        <td>Venessa Fern
                                        </td>
                                        <td>
                                            <label className="label label-1">Angular</label>
                                        </td>
                                        <td>46</td>
                                        <td>356</td>
                                        <td>
                                            <h5 className="price">$2850.06</h5>
                                        </td>
                                        <td>
                                            <button className="btn_edit">Edit</button>
                                            <button className="btn_dele">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">
                                            <div className="product-name">
                                                <a className="link-name user-2">MA</a>
                                                <h4 className="b-text">Monster Admin</h4>
                                            </div>
                                        </td>
                                        <td>Single Use</td>
                                        <td>Venessa Fern
                                        </td>
                                        <td>
                                            <label className="label label-2">Vue Js</label>
                                        </td>
                                        <td>46</td>
                                        <td>356</td>
                                        <td>
                                            <h5 className="price">$2850.06</h5>
                                        </td>
                                        <td>
                                            <button className="btn_edit">Edit</button>
                                            <button className="btn_dele">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">
                                            <div className="product-name">
                                                <a className="link-name user-3">MP</a>
                                                <h4 className="b-text">Material Pro Admin</h4>
                                            </div>
                                        </td>
                                        <td>Single Use</td>
                                        <td>John Doe</td>
                                        <td>
                                            <label className="label label-3">Bootstrap</label>
                                        </td>
                                        <td>46</td>
                                        <td>356</td>
                                        <td>
                                            <h5 className="price">$2850.06</h5>
                                        </td>
                                        <td>
                                            <button className="btn_edit">Edit</button>
                                            <button className="btn_dele">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">
                                            <div className="product-name">
                                                <a className="link-name user-4">AA</a>
                                                <h4 className="b-text">Ample Admin</h4>
                                            </div>
                                        </td>
                                        <td>Single Use</td>
                                        <td>John Doe</td>
                                        <td>
                                            <label className="label label-4">React</label>
                                        </td>
                                        <td>46</td>
                                        <td>356</td>
                                        <td>
                                            <h5 className="price">$2850.06</h5>
                                        </td>
                                        <td>
                                            <button className="btn_edit">Edit</button>
                                            <button className="btn_dele">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableComponent;