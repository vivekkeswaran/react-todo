import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.title = "React TO-DO Application"
    }

    render() {
        return (
            <div>
               <h1>{this.title}</h1>
            </div>
        );
    }
}

export default Header;
