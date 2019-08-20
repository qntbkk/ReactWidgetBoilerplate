import * as React from "react";
/**
 * Built-in Properties of Mendix
 */
interface IMendixDefaultProps {
    /** Class configured from Modeller */
    class: string;
    /** Context Object of the widget */
    mxObject?: mendix.lib.MxObject;
    /** Style configured from Modeller */
    style: string;
    /** Form object contains the widget */
    mxform: mxui.lib.form._FormBase;
}
/**
 * Interface for variable sent from Modeller
 */
interface IMxReactWidgetProps extends IMendixDefaultProps {
    messageString?: string
}
/** Widget state, if changed, the widget will be re-rendered */
interface IWidgetState {
    currentTime?: string;
}
export default class MxReactWidget extends React.Component<IMxReactWidgetProps, IWidgetState> {
    constructor(props: IMxReactWidgetProps) {
        super(props);
        this.state = {
            currentTime: props.messageString
        };
    }
    componentWillMount() {
        console.log('component will mount');
        window.setInterval(() => {
            this.setState({ currentTime: `Current Time: ${new Date()}` }); // Re-render every sec since we update the state
        }, 1000)
    }
    componentWillReceiveProps(nextProps: IMxReactWidgetProps) {
        return (
            <div>
                {nextProps}
            </div>
        )
    }
    render() {
        return (
            <div>
                <div>Message from Modeller: {this.props.messageString}</div>
                <div>Current time in State: {this.state.currentTime}</div>
            </div >
        )
    }
    componentDidUpdate() {
        console.log("component did update");
    }
    componentWillUnmount() {
        // unintialize
    }
} 