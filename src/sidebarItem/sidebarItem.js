import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helpers";

class SidebarItemComponent extends Component {
    render() { 

        const {_index, __note, classes, selectedNoteIndex} = this.props;

        return (
            <div key={_index}>
                <ListItem 
                className={classes.ListItem}
                selected={selectedNoteIndex === _index}
                alignItems='flex-start'>
                    <div 
                    className={classes.textSection}
                    onClick={() => this.selectNote(__note, _index)}>
                        <ListItemText
                        primary={__note.title}
                        secondary={removeHTMLTags(__note.body.substring(0,30))+'...'}></ListItemText>
                    </div>
                    <DeleteIcon
                    onClick={() => this.deleteNote(__note)}
                    className={classes.deleteIcon}></DeleteIcon>
                </ListItem>
            </div>
        );
    }
    selectNote = (__note,_index) => {
        this.props.selectNote(__note,_index);
    };
    deleteNote = (__note) => {
        if(window.confirm(`are you sure you want to delete: ${__note.title}`)){
            this.props.deleteNote(__note);
        }
    };
}
 
export default withStyles(styles)(SidebarItemComponent);