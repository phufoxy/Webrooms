import React, {Component} from 'react';

class TableComponent extends Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="b-card">
                    <div className="card-body">
                        <h4 className="card-title">Table Header</h4>
                        <h6 className="card-subtitle">Similar to tables, use the modifier classes .thead-light to make
                            <code>
                                thead
                            </code>
                            sappear light.</h6>
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
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