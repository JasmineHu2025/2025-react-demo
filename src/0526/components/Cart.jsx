export default function Carts() {
    return (
        <>
            {/* 灰底色 */}
            <div className="bg-light p-3">
                <table className="table align-middle">
                    <tbody>
                        {/* 一列五欄 */}
                        <tr>
                            <td><a href="">x</a></td>
                            <td>
                                <img src='https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80'
                                    className="table-img"
                                    alt="..." />
                            </td>
                            <td>
                                產品名稱
                                <br />
                                <small className="text-muted">NT$ 200</small>
                            </td>
                            <td>
                                <select name="" id="" className="form-select"></select>
                            </td>
                            <td className="text-end">NT$ 600</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* 一列五欄 */}
                        <tr>
                            <td><a href="">x</a></td>
                            <td>
                                <img src='https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80'
                                    className="table-img"
                                    alt="..." />
                            </td>
                            <td>
                                產品名稱
                                <br />
                                <small className="text-muted">NT$ 200</small>
                            </td>
                            <td>
                                <select name="" id="" className="form-select"></select>
                            </td>
                            <td className="text-end">NT$ 400</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-end" colSpan={5}>總金額 NT$ 1,000</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}