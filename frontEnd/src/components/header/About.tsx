import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import styles from "./About.module.scss";

interface IAboutProps {
}

export default class About extends Component<IAboutProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row className={styles.rowPadding}>
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="alice.png"
                            alt="Alice"
                        />
                        <Figure.Caption className={styles.caption}>
                            Alice
                        </Figure.Caption>
                    </Figure>

                    <div className={styles.inBetween} />
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="john.png"
                            alt="john"
                        />
                        <Figure.Caption className={styles.caption}>
                            John
                        </Figure.Caption>
                    </Figure>

                    <div className={styles.inBetween} />
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="kyle.png"
                            alt="Kyle"
                        />
                        <Figure.Caption className={styles.caption}>
                            Kyle
                        </Figure.Caption>
                    </Figure>

                </Row>
                <Row className={styles.rowPadding}>
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="marie.png"
                            alt="Marie"
                        />
                        <Figure.Caption className={styles.caption}>
                            Marie
                        </Figure.Caption>
                    </Figure>

                    <div className={styles.inBetween} />
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="sarah.png"
                            alt="Sarah"
                        />
                        <Figure.Caption className={styles.caption}>
                            Sarah
                        </Figure.Caption>
                    </Figure>

                </Row>
            </div >
        );
    }
}