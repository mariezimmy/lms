import React, { Component } from "react";
import DocComment from "../../model/DocComment";
import styles from "./CommentVisualizer.module.scss";

interface CommentVisualizerProps {
	comment: DocComment;
}

export default class CommentVisualizer extends Component<CommentVisualizerProps> {
	render(): JSX.Element {
		console.log(this.props.comment);
		return (
			<div className={styles.Comment}>
				<p>Author: {this.props.comment.author}</p>
				<p>Comment: {this.props.comment.body}</p>
			</div>
		);
	}
}
