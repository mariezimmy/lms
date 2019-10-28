/* eslint-disable */
import React, { Component } from "react";
import DocComment from "../../model/DocComment";
import styles from "./CommentSidebar.module.scss";
import CommentVisualizer from "./CommentVisualizer";

interface CommentSidebarProps {
	comments?: DocComment[];
}

export default class CommentSidebar extends Component<CommentSidebarProps> {
	render(): JSX.Element {
		console.log(this.props.comments);
		return (
			<div className={styles.CommentSidebar}>
				<div>
					{
						this.props.comments ? 
						this.props.comments.map((comment: DocComment) => {return(
								<CommentVisualizer
									comment={comment}
								/>
							)})
						: <></>
					}
				</div>
				<div>
					{/* Text input goes here */}
				</div>
			</div>
		);
	}
}
