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
				<p className={styles.commentAuthor}>{this.props.comment.author}</p>
				<p className={styles.commentText}> {this.props.comment.body}</p>
			</div>
		);
	}
}
