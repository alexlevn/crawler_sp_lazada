import React from 'react';

class InputData extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            url1: 'https://www.lazada.vn/products/chong-soc-op-lung-trang-guong-danh-cho-huawei-nova-3i-nap-lung-kinh-cuong-luc-full-do-phu-hd-ro-net-op-dien-thoai-i263570908-s376924003.html',
            url2: 'http://bit.ly/2OzbfSD'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.onGetData([this.state.url1, this.state.url2]); // Call actions
        event.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="w-90 center pa2 flex flex-wrap">
                <div className="w-100 pt2">
                    <span>Sản phẩm 1:</span>
                    <input
                        type="text"
                        name="url1"
                        id=""
                        onChange={this.handleChange.bind(this)}
                        required="required"
                        className="w-100 pa1 black-70 f6 ba b--black-30 br1 bg-white outline-0 mt1"
                        value={this.state.url1}
                    />
                </div>
                <div className="w-100 pt2">
                    <span>Sản phẩm 2:</span>
                    <input
                        type="text"
                        name="url2"
                        id=""
                        onChange={this.handleChange.bind(this)}
                        required="required"
                        className="w-100 pa1 black-70 f6 ba b--black-30 br1 bg-white outline-0 mt1"
                        value={this.state.url2}
                    />
                </div>

                {
                    this.props.showButton ?
                        <button type="submit" className="mt2 link dim bg-blue ph3 pv2 br2 white pointer fw5 f5 ttu">Submit</button>
                        :
                        <div className="pv3 red">Submitting...</div>
                }

            </div>
        </form>
    }
}
export default InputData;