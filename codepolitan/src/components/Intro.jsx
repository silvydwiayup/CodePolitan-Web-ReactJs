import React from 'react'
import { Link } from 'react-router-dom'

const Intro = (props) => (
    <div className="col-md-6" style={styles.box450}>
        <p style={styles.greyText}>{props.content}</p>
        <Link to="#" className="btn buttonAction">
            Pelajari Detail Program
        </Link>
    </div>
)

const styles = {
    box450: {
        minHeight: '450px'
    },
    greyText: {
        color: '#808080',
        fontSize: 21,
        textAlign: 'justify'
    }
}


export default Intro