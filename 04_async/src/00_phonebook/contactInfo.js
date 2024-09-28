

class ContactInfo extends Component {
    render(){
        return(
            <div className="container">
                <table className="table table-bordered">
                    <tr className="success">
                        <td onClick={this.props.onClick}>{this.props.contact.name}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ContactInfo;