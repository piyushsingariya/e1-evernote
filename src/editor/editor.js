import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Input } from "@material-ui/core";


class EditorComponent extends Component {
    
    constructor(){
        super();
        this.state = {
            text: '',
            title: '',
            id: '',
        };
    }

    componentDidMount = () => {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }


    componentDidUpdate = () => {
      if(this.props.selectedNote.id !== this.state.id){
        this.setState({
          text: this.props.selectedNote.body,
          title: this.props.selectedNote.title,
          id: this.props.selectedNote.id,
        });
      }
    }

    render() { 
    const { classes } = this.props;
        return (
          <div className={classes.editorContainer}>
            <BorderColorIcon
            className={classes.editIcon}></BorderColorIcon>
            <Input 
            className={classes.titleInput}
            placeholder='Note Title ....'
            value={this.state.title ? this.state.title:''}
            onChange={(e) => this.updateTitle(e.target.value)}>
            </Input>
            <ReactQuill
              value={this.state.text}
              onChange={this.updateBody}
            ></ReactQuill>
          </div>
        );
    }
    updateBody = async (value) => {
        await this.setState({text:value});
        this.update();
    };
    updateTitle = async (text) => {
      await this.setState({title:text});
        this.update();
    };
    update = debounce (() => {
        this.props.noteUpdate(this.state.id, {
          title: this.state.title,
          body: this.state.text,
        })
    }, 1500);
}
 
export default withStyles(styles)(EditorComponent);