import React, {Component} from 'react';

class ProductComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                <div className="card-body">
                    <div className="header-card">
                        <div>
                            <h4 className="card-title">Top Selling Products</h4>
                            <h5 className="card-subtitle">Overview of Top Selling Items
                            </h5>
                        </div>
                        <div className="drop-select">
                            <select className="custom-select">
                                <option value={0} >Monthly</option>
                                <option value={1}>Daily</option>
                                <option value={2}>Weekly</option>
                                <option value={4}>Yearly</option>
                            </select>
                        </div>
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
                                    <th scope="row">
                                        <div className="product-name">
                                            <a href="/" className="link-name user-1">AE</a>
                                            <h4 className="b-text">Elite Admin</h4>
                                        </div>
                                    </th>
                                    <td>Single Use</td>
                                    <td>John Doe</td>
                                    <td>
                                        <label className="label label-1">Angular</label>
                                    </td>
                                    <td>46</td>
                                    <td>356</td>
                                    <td>
                                        <h5 className="price">$2850.06</h5>
                                    </td>
                                    <td>
                                        <button className="btn_edit">Edit</button>&nbsp;
                                        <button className="btn_dele">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="product-name">
                                            <a href="/" className="link-name user-2">MA</a>
                                            <h4 className="b-text">Monster Admin</h4>
                                        </div>
                                    </th>
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
                                        <button className="btn_edit">Edit</button>&nbsp;
                                        <button className="btn_dele">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="product-name">
                                            <a href="/" className="link-name user-3">MP</a>
                                            <h4 className="b-text">Material Pro Admin</h4>
                                        </div>
                                    </th>
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
                                        <button className="btn_edit">Edit</button>&nbsp;
                                        <button className="btn_dele">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="product-name">
                                            <a href="/" className="link-name user-4">AA</a>
                                            <h4 className="b-text">Ample Admin</h4>
                                        </div>
                                    </th>
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
                                        <button className="btn_edit">Edit</button>&nbsp;
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

export default ProductComponent;