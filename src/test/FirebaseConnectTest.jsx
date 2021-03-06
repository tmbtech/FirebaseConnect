/* eslint  react/no-multi-comp: 0 */
import FirebaseConnect from "../index";
import React from "react";
import Firebase from "firebase";

const defaultProps = {
    url: "domain.com"
};

var bitCoinUrl = new Firebase("https://publicdata-cryptocurrency.firebaseio.com/bitcoin");

describe("FirebaseConnect", () => {
    let node;
    beforeEach(() => {
        node = document.createElement("div");
    });

    it("should be exported", () => {
        expect(FirebaseConnect).to.not.equal(undefined);
    });

    it("should be render children", (done) => {
        React.render((
            <FirebaseConnect {...defaultProps}>
                <div id="child">Child Component</div>
            </FirebaseConnect>
        ), node, () => {
            expect(node.querySelector("#child").innerText).to.equal("Child Component");
            done();
        });
    });

    it("should pass down props", (done) => {
        const Child = React.createClass({
            componentDidMount() {
                expect(Object.keys(this.props)).not.to.be.empty;
            },
            render() {
                return null;
            }
        });

        React.render((
            <FirebaseConnect {...defaultProps}>
                <Child />
            </FirebaseConnect>
        ), node, done);
    });

    it("should have a default prop key called firebaseData", (done) => {
        const Child = React.createClass({
            componentDidMount() {
                const [key] = Object.keys(this.props);
                expect(key).to.equal("firebaseData");
            },
            render() {
                return null;
            }
        });

        React.render((
            <FirebaseConnect {...defaultProps}>
                <Child />
            </FirebaseConnect>
        ), node, done);
    });

    it("should be able to override firebaseData key", (done) => {
        const Child = React.createClass({
            componentDidMount() {
                const [key] = Object.keys(this.props);
                expect(key).to.equal("newDataKey");
            },
            render() {
                return null;
            }
        });

        React.render((
            <FirebaseConnect firebaseKey="newDataKey" {...defaultProps}>
                <Child />
            </FirebaseConnect>
        ), node, done);
    });

    it("should be able to pass down ref", (done) => {
        const Child = React.createClass({
            componentWillMount() {
                expect(false).to.equal(true);
            },
            render() {
                return null;
            }
        });
        React.render((
            <FirebaseConnect url={bitCoinUrl}>
                <Child />
            </FirebaseConnect>), node, done);
    });
});
