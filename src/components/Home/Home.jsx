import React from "react";
import styles from "./Home.scss";

class Home extends React.Component {
    render(){
        return (
            <div>
                <div className={styles.header}>
                    Home Page
                </div>
            </div>
        )
    }
}

export default Home;