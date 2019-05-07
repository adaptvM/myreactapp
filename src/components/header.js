import React  from 'react';
import classes from '../css/styles.module.css'

const  Header = (props) => {
   
        return (

            <header className={classes.logo}>
                <div className="logo">Logo</div>

                <input
                    type="text" onChange={props.keywords} />

            </header>


        )

}



export default Header; 