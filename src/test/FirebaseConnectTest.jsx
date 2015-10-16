import FirebaseConnect from "../index";
import React from "react";

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
            <FirebaseConnect>
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
                console.log("keys", Object.keys(this.props));
                expect(Object.keys(this.props)).not.to.be.empty;
            },
            render() {
                return null;
            }
        });

        React.render((
            <FirebaseConnect>
                <Child />
            </FirebaseConnect>
        ), node, done);
    });
});
