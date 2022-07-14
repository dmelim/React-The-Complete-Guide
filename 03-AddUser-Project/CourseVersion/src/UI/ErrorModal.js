import Card from "./Card";
import classes from "./ErrorModal.module.css"
import Button from "./Button";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div onClick={props.onConfirm} className={classes.backdrop} />
}

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>)
}

const ErrorModal = props => {
    // Here we can see the use of "Fragments" and the use of Portals
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById("overlay-root"))}
        </Fragment>
    )
}

export default ErrorModal;