import React, { Component } from "react";
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
                <br />
                <h1 className={styles.headers}>
                    <b>The Project Lead</b>
                </h1>

                <Row className={styles.rowPadding}>
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="jonathan.png"
                            alt="Jonathan"
                        />
                    </Figure>
                </Row>
                <p>
                    <b className={styles.name}>Jonathan Shelley (Ph.D., UC Berkeley)</b>
                </p>

                <div className={styles.textWrapper}>
                    <p className={styles.caption}>Jonathan Shelley (Ph.D., UC Berkeley) is a Marion L. Brittain Postdoctoral Fellow at Georgia Tech. His research focuses on theories and depictions of friendship in early modern prose, poetry, and drama.</p>
                </div>

                <hr className = {styles.divider} />
                <hr className = {styles.divider} />

                <h1 className={styles.headers}>
                    <b>The Developers</b>
                </h1>

                <div className={styles.textWrapper}>
                     <p className={styles.caption}> Hi! We're five Georgia Tech students. We are Junior Design developers building an interactive repository
                of John Donne's letters for our client, Dr. Jonathan Shelley.</p>
                </div>

                <Row className={styles.rowPadding}>
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="alice.png"
                            alt="Alice"
                        />
                        <Figure.Caption className={styles.stuCaption}>
                            <b className={styles.stuName}>Alice</b>
                            <p>I'm a fullstack developer. In my free time, I enjoy figure skating, marine life, and making games.</p>
                        </Figure.Caption>
                    </Figure>

                    <div className={styles.inBetween} />
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="john.png"
                            alt="john"
                        />
                        <Figure.Caption className={styles.stuCaption}>
                            <b className={styles.stuName}>John</b>
                            <p>I'm a backend developer. In my free time, I enjoy reading, puzzle games, and going to coffee shops.</p>
                        </Figure.Caption>
                    </Figure>

                    <div className={styles.inBetween} />
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="kyle.png"
                            alt="Kyle"
                        />
                        <Figure.Caption className={styles.stuCaption}>
                            <b className={styles.stuName}>Kyle</b>
                            <p>I'm a backend developer. In my free time, I enjoy reading, running, and cooking.</p>
                        </Figure.Caption>
                    </Figure>

                </Row>
                <Row className={styles.rowPadding}>
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="marie.png"
                            alt="Marie"
                        />
                        <Figure.Caption className={styles.stuCaption}>
                            <b className={styles.stuName}>Marie</b>
                            <p>I'm a fullstack developer. In my free time, I enjoy knitting, making pixel art, and cooking.</p>
                        </Figure.Caption>
                    </Figure>

                    <div className={styles.inBetween} />
                    <Figure className={styles.avatars}>
                        <Figure.Image
                            src="sarah.png"
                            alt="Sarah"
                        />
                        <Figure.Caption className={styles.stuCaption}>
                            <b className={styles.stuName}>Sarah</b>
                            <p>I'm a frontend developer. In my free time, I enjoy reading, photography, and playing with my hamster Pancake.</p>
                        </Figure.Caption>
                    </Figure>
                </Row>
            </div >
        );
    }
}